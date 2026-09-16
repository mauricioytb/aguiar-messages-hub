import { Instagram, Music2, Youtube } from "lucide-react";

import { redes } from "@/data/site";
import { SectionHeading } from "@/components/site/SectionHeading";

const icons = { youtube: Youtube, instagram: Instagram, tiktok: Music2 } as const;
const iconStyles = {
  youtube: "bg-youtube text-social-foreground",
  instagram: "bg-instagram text-social-foreground",
  tiktok: "bg-tiktok text-social-foreground",
} as const;

export function RedesSociais() {
  return (
    <section className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          eyebrow="Redes sociais"
          title="Acompanhe pelas redes"
          description="Pregações, devocionais e conteúdos diários. Escolha a sua rede preferida e siga agora mesmo."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {redes.map((r) => {
            const Icon = icons[r.id];
            return (
              <a
                key={r.id}
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-start rounded-2xl border border-border/60 bg-card p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-accent"
              >
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconStyles[r.id]}`}>
                  <Icon size={22} />
                </span>
                <p className="mt-5 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  {r.nome}
                </p>
                <p className="mt-1 font-display text-xl tracking-wide text-foreground uppercase">
                  {r.handle}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
