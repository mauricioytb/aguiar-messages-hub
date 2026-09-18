import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Menu, Music2, X, Youtube } from "lucide-react";

import { site } from "@/data/site";

const links = [
  { to: "/", label: "Início" },
  { to: "/mensagens", label: "Mensagens" },
  { to: "/devocionais", label: "Devocionais" },
  { to: "/agenda", label: "Agenda" },
  { to: "/contato", label: "Contato" },
] as const;

const sociais = [
  { href: site.youtube, label: "YouTube", Icon: Youtube, className: "text-youtube" },
  { href: site.instagram, label: "Instagram", Icon: Instagram, className: "text-instagram" },
  { href: site.tiktok, label: "TikTok", Icon: Music2, className: "text-tiktok" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link
          to="/"
          className="font-display text-lg tracking-[0.18em] text-foreground uppercase"
        >
          {site.nome}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          {sociais.map(({ href, label, Icon, className }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className={`${className} transition-opacity hover:opacity-70`}
            >
              <Icon size={19} />
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border/60 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block px-5 py-3 text-sm font-semibold tracking-[0.12em] text-muted-foreground uppercase"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-5 px-5 py-3">
            {sociais.map(({ href, label, Icon, className }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                onClick={() => setOpen(false)}
                className={`${className} transition-opacity hover:opacity-70`}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
