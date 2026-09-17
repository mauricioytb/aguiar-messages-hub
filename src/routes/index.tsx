import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Instagram, MessageCircle, Music2, Youtube } from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MensagemCard } from "@/components/site/MensagemCard";
import { RedesSociais } from "@/components/site/RedesSociais";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Button } from "@/components/ui/button";
import { heroImage, mensagens, site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pb. Maurício Aguiar — Pregador" },
      {
        name: "description",
        content:
          "Pregador brasileiro Maurício Aguiar. Acompanhe nas redes sociais — YouTube, Instagram e TikTok — e assista às mensagens em vídeo.",
      },
      { property: "og:title", content: "Pb. Maurício Aguiar — Pregador" },
      {
        property: "og:description",
        content: "Um chamado. Uma mensagem. Uma missão. Siga o Pb. Maurício Aguiar nas redes sociais.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative isolate flex min-h-[calc(100svh-69px)] items-end overflow-hidden">
          <img
            src={heroImage}
            alt="Pb. Maurício Aguiar pregando no púlpito"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[64%_center] md:object-center"
          />
          <div className="absolute inset-0 -z-10 bg-primary/65 md:bg-primary/50" aria-hidden="true" />
          <div className="mx-auto w-full max-w-6xl px-5 py-14 md:py-20">
            <div className="max-w-xl">
              <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-primary-foreground/85 uppercase">
                {site.titulo}
              </p>
              <h1 className="font-display text-5xl leading-[0.9] tracking-normal text-primary-foreground uppercase sm:text-6xl md:text-7xl">
                Mauricio Aguiar
              </h1>
              <p className="mt-5 font-display text-xl tracking-normal text-primary-foreground/90 uppercase sm:text-2xl">
                {site.tagline}
              </p>
              <div className="mt-8 flex flex-nowrap items-center gap-2">
                {(
                  [
                    { id: "youtube", label: "YouTube", href: site.youtube, Icon: Youtube, bg: "bg-youtube", edge: "var(--youtube)" },
                    { id: "instagram", label: "Instagram", href: site.instagram, Icon: Instagram, bg: "bg-instagram", edge: "var(--instagram)" },
                    { id: "tiktok", label: "TikTok", href: site.tiktok, Icon: Music2, bg: "bg-tiktok", edge: "var(--tiktok)" },
                  ] as const
                ).map(({ id, label, href, Icon, bg, edge }) => (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    style={{ "--btn-bg": edge } as React.CSSProperties}
                    className={`social-3d inline-flex h-11 items-center gap-1.5 whitespace-nowrap rounded-full ${bg} px-3 text-sm font-semibold text-social-foreground sm:px-4`}
                  >
                    <Icon size={18} />
                    {label}
                  </a>
                ))}
              </div>
              <a
                href="#mensagens"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.14em] text-primary-foreground/90 uppercase transition-opacity hover:opacity-70"
              >
                Ver vídeos <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* Vídeos / Mensagens */}
        <section id="mensagens" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
          <SectionHeading
            eyebrow="Vídeos"
            title="Mensagens em vídeo"
            description="Uma seleção de pregações disponíveis no canal do YouTube. Clique para assistir."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mensagens.map((m) => (
              <MensagemCard key={m.id} mensagem={m} />
            ))}
          </div>
          <Link
            to="/mensagens"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.14em] text-accent uppercase transition-opacity hover:opacity-80"
          >
            Ver todas as mensagens <ArrowRight size={16} />
          </Link>
        </section>

        {/* Redes sociais */}
        <RedesSociais />

        {/* Apresentação */}
        <section className="border-t border-border/60">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-24">
            <div>
              <SectionHeading eyebrow="Sobre" title="Maurício Aguiar" />
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Pregador brasileiro dedicado a anunciar o evangelho com convicção e sensibilidade.
                Suas mensagens unem profundidade bíblica e linguagem acessível, levando fé,
                restauração e esperança a pessoas de todas as idades.
              </p>
            </div>
            <blockquote className="border-l-2 border-accent pl-6 font-display text-2xl leading-snug tracking-wide text-foreground uppercase">
              “Um chamado. Uma mensagem. Uma missão.”
            </blockquote>
          </div>
        </section>

        {/* Contato */}
        <section className="border-t border-border/60 bg-secondary/40">
          <div className="mx-auto max-w-6xl px-5 py-16 text-center md:py-24">
            <h2 className="font-display text-3xl leading-tight tracking-tight text-foreground uppercase sm:text-4xl">
              Convide para o seu evento
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Agendas abertas para cultos, congressos e conferências. Fale diretamente pelo
              WhatsApp.
            </p>
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold tracking-wide text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              <MessageCircle size={16} /> {site.whatsappNumero}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
