import { Instagram, MessageCircle, Music2 } from "lucide-react";

import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-12 text-center">
        <p className="font-display text-xl tracking-[0.2em] text-foreground uppercase">
          {site.titulo}
        </p>
        <p className="text-sm text-muted-foreground">{site.tagline}</p>

        <div className="flex items-center gap-5">
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <Instagram size={20} />
          </a>
          <a
            href={site.tiktok}
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <Music2 size={20} />
          </a>
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <MessageCircle size={20} />
          </a>
        </div>

        <p className="text-xs tracking-wider text-muted-foreground/70">
          © {new Date().getFullYear()} {site.nome}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
