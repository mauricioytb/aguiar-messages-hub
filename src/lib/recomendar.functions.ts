import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { mensagens } from "@/data/site";

export type Recomendacao = { id: string; motivo: string };

export const recomendarPregacoes = createServerFn({ method: "POST" })
  .inputValidator((data) =>
    z.object({ texto: z.string().trim().min(3).max(600) }).parse(data),
  )
  .handler(async ({ data }): Promise<{ itens: Recomendacao[]; erro?: string }> => {
    const key = process.env['LOVABLE_API_KEY'];
    if (!key) return { itens: [], erro: "Recurso indisponível no momento." };

    const catalogo = mensagens.map((m) => `${m.id}: ${m.titulo}`).join("\n");
    const res = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
        "Lovable-API-Key": key,
        "X-Lovable-AIG-SDK": "fetch",
      },
      body: JSON.stringify({
        model: "openai/gpt-6-astra",
        stream: true,
        store: false,
        reasoning: { effort: "low" },
        instructions:
          "Você ajuda visitantes do site do Pb. Maurício Aguiar a encontrar pregações. Escolha de 1 a 3 pregações do catálogo mais relevantes para a dúvida ou tema do visitante, usando apenas ids do catálogo. Para cada uma, escreva um motivo curto (1 frase, acolhedora, em português). Catálogo (id: título):\n" +
          catalogo,
        input: [{ role: "user", content: data.texto }],
        text: {
          format: {
            type: "json_schema",
            name: "recomendacoes",
            strict: true,
            schema: {
              type: "object",
              additionalProperties: false,
              required: ["itens"],
              properties: {
                itens: {
                  type: "array",
                  items: {
                    type: "object",
                    additionalProperties: false,
                    required: ["id", "motivo"],
                    properties: { id: { type: "string" }, motivo: { type: "string" } },
                  },
                },
              },
            },
          },
        },
      }),
    });

    if (!res.ok || !res.body) {
      if (res.status === 429) return { itens: [], erro: "Muitas buscas agora. Tente em instantes." };
      if (res.status === 402 || res.status === 403)
        return { itens: [], erro: "Recurso temporariamente indisponível." };
      return { itens: [], erro: "Não foi possível buscar recomendações." };
    }

    const reader = res.body.getReader();
    const dec = new TextDecoder();
    let buf = "";
    let out = "";
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      buf += dec.decode(value, { stream: true });
      const lines = buf.split("\n");
      buf = lines.pop() ?? "";
      for (const l of lines) {
        if (!l.startsWith("data:")) continue;
        try {
          const ev = JSON.parse(l.slice(5).trim());
          if (ev.type === "response.output_text.delta") out += ev.delta;
        } catch {
          /* ignore */
        }
      }
    }

    try {
      const parsed = JSON.parse(out) as { itens: Recomendacao[] };
      const ids = new Set(mensagens.map((m) => m.id));
      const itens = parsed.itens.filter((i) => ids.has(i.id)).slice(0, 3);
      return itens.length ? { itens } : { itens: [], erro: "Nenhuma pregação encontrada para esse tema." };
    } catch {
      return { itens: [], erro: "Não foi possível entender a resposta. Tente novamente." };
    }
  });
