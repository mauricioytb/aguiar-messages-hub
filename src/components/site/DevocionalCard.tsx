import { Play } from "lucide-react";

import { youtubeThumb, youtubeThumbFallback } from "@/data/youtube";
import { youtubeUrl, type Devocional } from "@/data/site";

export function DevocionalCard({ devocional }: { devocional: Devocional }) {
  const href = devocional.youtubeId
    ? youtubeUrl(devocional.youtubeId)
    : undefined;
  const capa = devocional.youtubeId
    ? youtubeThumb(devocional.youtubeId)
    : undefined;

  const className =
    "group block overflow-hidden rounded-xl border border-border/60 bg-card shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1";

  const content = (
    <>
      <div className="relative aspect-video overflow-hidden bg-secondary">
        {capa ? (
          <img
            src={capa}
            alt={`Capa do devocional ${devocional.titulo}`}
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget;
              if (devocional.youtubeId && img.src === youtubeThumb(devocional.youtubeId)) {
                img.src = youtubeThumbFallback(devocional.youtubeId);
              }
            }}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : null}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/95 text-accent-foreground shadow-lg ring-1 ring-white/30 transition-transform duration-300 group-hover:scale-110">
            <Play size={22} className="translate-x-0.5 fill-current" />
          </span>
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg leading-tight tracking-wide text-foreground uppercase">
          {devocional.titulo}
        </h3>
      </div>
    </>
  );

  if (!href) {
    return <article className={className}>{content}</article>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
      aria-label={`Assistir "${devocional.titulo}" no YouTube`}
    >
      {content}
    </a>
  );
}
