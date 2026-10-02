import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ArrowRight, Instagram, MessageCircle, Music2, Youtube } from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MensagemCard } from "@/components/site/MensagemCard";
import { RedesSociais } from "@/components/site/RedesSociais";
import { SectionHeading } from "@/components/site/SectionHeading";

import { heroImage, site } from "@/data/site";
import { mensagensQuery } from "@/lib/youtube-queries";

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
      { property: "og:url", content: "https://mauricioaguiar.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://mauricioaguiar.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Pb. Maurício Aguiar",
          url: "https://mauricioaguiar.lovable.app/",
          description:
            "Site oficial do pregador Pb. Maurício Aguiar. Mensagens em vídeo, devocionais e agenda de eventos.",
          inLanguage: "pt-BR",
        }),
      },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(mensagensQuery),
  component: Home,
});

function Home() {
  const { data: mensagens } = useSuspenseQuery(mensagensQuery);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative isolate flex min-h-[calc(100svh-69px)] items-end overflow-hidden">
          <img
            src={heroImage}
            alt="Pb. Maurício Aguiar pregando no púlpito"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_30%]"
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
              <div className="mt-8 grid w-full max-w-md grid-cols-3 gap-2">
                {(
                  [
                    { id: "youtube", label: "YouTube", href: site.youtube, Icon: Youtube, accent: "bg-youtube" },
                    { id: "instagram", label: "Instagram", href: site.instagram, Icon: Instagram, accent: "bg-instagram" },
                    { id: "tiktok", label: "TikTok", href: site.tiktok, Icon: Music2, accent: "bg-accent" },
                  ] as const
                ).map(({ id, label, href, Icon, accent }) => (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="group relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-white/5 py-5 px-2 backdrop-blur-xl transition-all hover:bg-white/10 active:scale-95"
                  >
                    <span className={`absolute inset-x-0 bottom-0 h-[3px] ${accent}`} aria-hidden="true" />
                    <Icon size={26} className="text-primary-foreground" />
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/80">
                      {label}
                    </span>
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
            {mensagens.slice(0, 6).map((m) => (
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
