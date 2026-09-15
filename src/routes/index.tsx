import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Instagram, MessageCircle, Music2, Youtube } from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MensagemCard } from "@/components/site/MensagemCard";
import { RedesSociais } from "@/components/site/RedesSociais";
import { SectionHeading } from "@/components/site/SectionHeading";
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
        <section
          className="relative overflow-hidden"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-accent uppercase">
                {site.titulo}
              </p>
              <h1 className="font-display text-5xl leading-[0.9] tracking-tight text-primary-foreground uppercase sm:text-6xl">
                Mauricio Aguiar
              </h1>
              <p className="mt-5 font-display text-xl tracking-wide text-primary-foreground/85 uppercase">
                {site.tagline}
              </p>
              <p className="mt-6 max-w-md text-base leading-relaxed text-primary-foreground/75">
                Pregador brasileiro levando esperança e a Palavra a igrejas, congressos e eventos
                por todo o Brasil. Acompanhe o ministério nas redes sociais.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={site.youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground transition-opacity hover:opacity-90"
                >
                  <Youtube size={20} />
                </a>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground transition-opacity hover:opacity-90"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={site.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground transition-opacity hover:opacity-90"
                >
                  <Music2 size={20} />
                </a>
              </div>
              <a
                href="#mensagens"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.14em] text-primary-foreground/90 uppercase transition-opacity hover:opacity-70"
              >
                Ver vídeos <ArrowRight size={16} />
              </a>
            </div>

            <div className="relative">
              <div className="aspect-4/5 overflow-hidden rounded-2xl border border-primary-foreground/15 shadow-[var(--shadow-strong)]">
                <img
                  src={heroImage}
                  alt="Pb. Maurício Aguiar pregando no púlpito"
                  className="h-full w-full scale-[1.12] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Redes sociais */}
        <RedesSociais />

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
