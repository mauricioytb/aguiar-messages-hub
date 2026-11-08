import { MessageCircle } from "lucide-react";

import { site } from "@/data/site";

/**
 * Convite para o grupo oficial do WhatsApp, com botão e QR code.
 * Usado na página inicial e na página de Contato.
 */
export function GrupoWhatsapp() {
  return (
    <section className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-16 md:flex-row md:justify-center md:gap-14 md:py-24">
        <div className="max-w-md text-center md:text-left">
          <p className="text-xs font-semibold tracking-[0.28em] text-accent uppercase">
            Grupo oficial
          </p>
          <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-foreground uppercase sm:text-4xl">
            Entre para o grupo no WhatsApp
          </h2>
          <p className="mt-4 text-muted-foreground">
            Receba avisos de pregações novas, devocionais e agenda direto no seu
            WhatsApp. Toque no botão ou aponte a câmera do celular para o QR
            code.
          </p>
          <a
            href={site.grupoWhatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold tracking-wide text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            <MessageCircle size={16} /> Entrar no grupo
          </a>
        </div>

        <a
          href={site.grupoWhatsappLink}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir convite do grupo no WhatsApp"
          className="shrink-0 rounded-2xl border border-border/60 bg-card p-4 shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02]"
        >
          <img
            src="/grupo-whatsapp-qr.png"
            alt="QR code para entrar no grupo do WhatsApp"
            width={492}
            height={492}
            className="h-44 w-44 rounded-lg md:h-52 md:w-52"
            loading="lazy"
          />
          <p className="mt-3 text-center text-[11px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Aponte a câmera
          </p>
        </a>
      </div>
    </section>
  );
}
