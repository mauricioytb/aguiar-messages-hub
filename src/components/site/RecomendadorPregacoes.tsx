import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";

import { MensagemCard } from "@/components/site/MensagemCard";
import { mensagens } from "@/data/site";
import { recomendarPregacoes, type Recomendacao } from "@/lib/recomendar.functions";

export function RecomendadorPregacoes() {
  const recomendar = useServerFn(recomendarPregacoes);
  const [texto, setTexto] = useState("");
  const [loading, setLoading] = useState(false);
  const [itens, setItens] = useState<Recomendacao[]>([]);
  const [erro, setErro] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (texto.trim().length < 3 || loading) return;
    setLoading(true);
    setErro(null);
    setItens([]);
    try {
      const r = await recomendar({ data: { texto } });
      setItens(r.itens);
      if (r.erro) setErro(r.erro);
    } catch {
      setErro("Não foi possível buscar recomendações.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <h2 className="font-display text-2xl uppercase tracking-wide md:text-3xl">
        Qual mensagem você precisa hoje?
      </h2>
      <p className="mt-2 text-muted-foreground">
        Conte o que você está vivendo ou um tema, e sugerimos pregações para você.
      </p>
      <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          maxLength={600}
          placeholder="Ex.: estou me sentindo sozinho e desanimado"
          aria-label="Descreva sua dúvida ou tema"
          className="flex-1 rounded-lg border border-input bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"
        />
        <button
          type="submit"
          disabled={loading || texto.trim().length < 3}
          className="rounded-lg bg-accent px-6 py-3 font-semibold uppercase tracking-wide text-accent-foreground transition hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Buscando..." : "Recomendar"}
        </button>
      </form>
      {erro && <p className="mt-4 text-sm text-muted-foreground">{erro}</p>}
      {itens.length > 0 && (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {itens.map((i) => {
            const m = mensagens.find((x) => x.id === i.id);
            if (!m) return null;
            return (
              <div key={i.id} className="flex flex-col gap-2">
                <MensagemCard mensagem={m} />
                <p className="text-sm text-muted-foreground">{i.motivo}</p>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
