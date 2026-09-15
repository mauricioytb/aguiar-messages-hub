import { Play } from "lucide-react";

import { youtubeUrl, type Mensagem } from "@/data/site";

export function MensagemCard({ mensagem }: { mensagem: Mensagem }) {
  const href = mensagem.youtubeId ? youtubeUrl(mensagem.youtubeId) : undefined;
  const className =
    "group block overflow-hidden rounded-xl border border-border/60 bg-card shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1";

  const content = (
    <>
      <div className="relative aspect-video overflow-hidden bg-secondary">
        <img
          src={mensagem.capa}
          alt={`Capa da mensagem ${mensagem.titulo}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/95 text-accent-foreground shadow-lg ring-1 ring-white/30 transition-transform duration-300 group-hover:scale-110">
            <Play size={22} className="translate-x-0.5 fill-current" />
          </span>
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg leading-tight tracking-wide text-foreground uppercase">
          {mensagem.titulo}
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
      aria-label={`Assistir "${mensagem.titulo}" no YouTube`}
    >
      {content}
    </a>
  );
}
