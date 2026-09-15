import type { Mensagem } from "@/data/site";

export function MensagemCard({ mensagem }: { mensagem: Mensagem }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-border/60 bg-card shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1">
      <div className="aspect-video overflow-hidden bg-secondary">
        <img
          src={mensagem.capa}
          alt={`Capa da mensagem ${mensagem.titulo}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg leading-tight tracking-wide text-foreground uppercase">
          {mensagem.titulo}
        </h3>
      </div>
    </article>
  );
}
