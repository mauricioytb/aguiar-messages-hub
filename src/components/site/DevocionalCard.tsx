import { Play, Youtube } from "lucide-react";

import { site, type Devocional } from "@/data/site";

export function DevocionalCard({ devocional }: { devocional: Devocional }) {
  const href = devocional.youtubeId
    ? `https://www.youtube.com/watch?v=${devocional.youtubeId}`
    : site.youtube;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Assistir "${devocional.titulo}" no YouTube`}
      className="group flex items-center gap-5 rounded-xl border border-border/60 bg-card p-5 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1"
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
        <Play size={22} className="translate-x-0.5 fill-current" />
      </span>
      <div className="min-w-0">
        <h3 className="font-display text-lg leading-tight tracking-wide text-foreground uppercase">
          {devocional.titulo}
        </h3>
        <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.14em] text-accent uppercase">
          <Youtube size={14} /> Assistir no YouTube
        </p>
      </div>
    </a>
  );
}
