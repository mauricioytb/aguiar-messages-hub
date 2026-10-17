import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { site } from "@/data/site";

/**
 * Banner temporário da campanha "Estudo bíblico exclusivo".
 *
 * Aparece no topo do site entre a publicação e o fim do evento
 * (19/10/2026, 20h de Brasília = 20/10 03:00 UTC). Depois disso
 * ele some sozinho — não precisa mexer no código.
 * O visitante também pode fechá-lo; a escolha fica guardada.
 */
const CHAVE = "banner-campanha-estudo-biblico";
const FIM = new Date("2026-10-20T03:00:00Z").getTime();

export function BannerCampanha() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const expirou = Date.now() > FIM;
    const fechado = localStorage.getItem(CHAVE) === "1";
    if (!expirou && !fechado) setVisivel(true);
  }, []);

  if (!visivel) return null;

  function fechar() {
    try {
      localStorage.setItem(CHAVE, "1");
    } catch {
      // sem localStorage (navegação privada) — só fecha na sessão
    }
    setVisivel(false);
  }

  return (
    <div
      className="relative z-50 border-b border-border/60"
      style={{ background: "var(--gradient-hero)" }}
      role="region"
      aria-label="Campanha: Estudo bíblico exclusivo"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-4 text-center md:flex-row md:justify-between md:gap-6 md:text-left">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-primary-foreground/80 uppercase">
            Um convite para você
          </p>
          <p className="mt-1 font-display text-lg leading-tight tracking-wide text-primary-foreground uppercase md:text-xl">
            Estudo bíblico exclusivo com Pb. Maurício Aguiar
          </p>
          <p className="mt-1 text-sm font-medium text-primary-foreground/90">
            19/10 · segunda-feira · 20h (horário de Brasília) · online e gratuito
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href={`${site.instagram}?utm_source=site&utm_medium=banner&utm_campaign=estudo-biblico`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent px-5 py-2.5 text-xs font-bold tracking-[0.14em] text-accent-foreground uppercase transition-opacity hover:opacity-90"
          >
            Comente ESTUDO e garanta seu convite
          </a>
          <button
            type="button"
            aria-label="Fechar aviso"
            onClick={fechar}
            className="rounded-full p-1.5 text-primary-foreground/70 transition-colors hover:text-primary-foreground"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
