import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MessageCircle, Music2 } from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { SectionHeading } from "@/components/site/SectionHeading";
import { site } from "@/data/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e Convites — Pb. Maurício Aguiar" },
      {
        name: "description",
        content:
          "Fale com o Pb. Maurício Aguiar pelo WhatsApp e acompanhe nas redes sociais. Agendas abertas para eventos.",
      },
      { property: "og:title", content: "Contato e Convites — Pb. Maurício Aguiar" },
      {
        property: "og:description",
        content: "Convites para cultos, congressos e conferências.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mauricioaguiar.lovable.app/contato" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://mauricioaguiar.lovable.app/contato" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contato e Convites — Pb. Maurício Aguiar",
          url: "https://mauricioaguiar.lovable.app/contato",
          description:
            "Convites para cultos, congressos e conferências. Fale com o Pb. Maurício Aguiar pelo WhatsApp.",
          inLanguage: "pt-BR",
          mainEntity: {
            "@type": "Person",
            name: "Maurício Aguiar",
            jobTitle: "Pregador",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Convites e agendas",
              url: site.whatsappLink,
              availableLanguage: "Portuguese",
            },
          },
        }),
      },
    ],
  }),
  component: Contato,
});

const canais = [
  { label: "WhatsApp", value: site.whatsappNumero, href: site.whatsappLink, Icon: MessageCircle },
  { label: "Instagram", value: "@mauricioaguiaroficial", href: site.instagram, Icon: Instagram },
  { label: "TikTok", value: "@mauricioaguiaroficial", href: site.tiktok, Icon: Music2 },
];

function Contato() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          eyebrow="Contato"
          title="Convites e agendas"
          description="Para convidar o Pb. Maurício Aguiar para cultos, congressos e conferências, entre em contato pelos canais abaixo."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {canais.map(({ label, value, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-border/60 bg-card p-6 shadow-[var(--shadow-soft)] transition-colors hover:border-accent"
            >
              <Icon size={20} className="text-accent" />
              <p className="mt-4 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                {label}
              </p>
              <p className="mt-1 font-medium text-foreground">{value}</p>
            </a>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
