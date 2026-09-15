import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MensagemCard } from "@/components/site/MensagemCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { heroImage, mensagens, site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pb. Maurício Aguiar — Pregador e Mensagens" },
      {
        name: "description",
        content:
          "Site oficial do pregador Maurício Aguiar. Mensagens, pregações e convites para eventos e congressos.",
      },
      { property: "og:title", content: "Pb. Maurício Aguiar — Pregador e Mensagens" },
      {
        property: "og:description",
        content: "Mensagens que transformam vidas. Conheça o ministério do Pb. Maurício Aguiar.",
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
        <section className="relative overflow-hidden bg-[var(--gradient-hero)]">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-accent uppercase">
                {site.titulo}
              </p>
              <h1 className="font-display text-4xl leading-[0.9] tracking-tight text-primary-foreground uppercase sm:text-6xl">
                Mensagens que
                <br />
                despertam a fé
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-primary-foreground/75">
                Pregador brasileiro, marido e servo comprometido com a Palavra. Levando esperança a
                igrejas, congressos e eventos por todo o Brasil.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={site.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold tracking-wide text-accent-foreground uppercase transition-opacity hover:opacity-90"
                >
                  <MessageCircle size={16} /> Convidar para pregar
                </a>
                <Link
                  to="/mensagens"
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold tracking-wide text-primary-foreground uppercase transition-colors hover:bg-primary-foreground/10"
                >
                  Ver mensagens <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-primary-foreground/15 shadow-[var(--shadow-strong)]">
                <img
                  src={heroImage}
                  alt="Pb. Maurício Aguiar pregando no púlpito"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sobre resumo */}
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <SectionHeading
            eyebrow="Sobre"
            title="Chamado para pregar a palavra"
            description="Maurício Aguiar é pregador do evangelho, dedicado a ensinar com clareza, reverência e paixão. Suas mensagens alcançam milhares de pessoas em cultos, congressos e nas redes sociais."
          />
          <Link
            to="/sobre"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.14em] text-accent uppercase"
          >
            Conhecer a história <ArrowRight size={16} />
          </Link>
        </section>

        {/* Mensagens */}
        <section className="border-t border-border/60 bg-secondary/40">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <SectionHeading eyebrow="Mensagens" title="Pregações em destaque" />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {mensagens.map((m) => (
                <MensagemCard key={m.id} mensagem={m} />
              ))}
            </div>
          </div>
        </section>

        {/* Contato */}
        <section className="mx-auto max-w-6xl px-5 py-16 text-center md:py-24">
          <h2 className="font-display text-3xl leading-tight tracking-tight text-foreground uppercase sm:text-4xl">
            Convide para o seu evento
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Agendas abertas para cultos, congressos e conferências. Fale diretamente pelo WhatsApp.
          </p>
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold tracking-wide text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            <MessageCircle size={16} /> {site.whatsappNumero}
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
