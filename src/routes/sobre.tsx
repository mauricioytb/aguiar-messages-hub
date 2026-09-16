import { createFileRoute } from "@tanstack/react-router";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { SectionHeading } from "@/components/site/SectionHeading";
import { heroImage } from "@/data/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Pb. Maurício Aguiar" },
      {
        name: "description",
        content:
          "Conheça a história e o ministério do pregador Maurício Aguiar, dedicado ao ensino da Palavra.",
      },
      { property: "og:title", content: "Sobre — Pb. Maurício Aguiar" },
      {
        property: "og:description",
        content: "A trajetória e o chamado do pregador Maurício Aguiar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="aspect-4/5 overflow-hidden rounded-2xl border border-border/60 shadow-[var(--shadow-soft)]">
            <img
              src={heroImage}
              alt="Pb. Maurício Aguiar ministrando"
              className="h-full w-full scale-[1.12] object-cover"
            />
          </div>
          <div>
            <SectionHeading eyebrow="Sobre" title="Maurício Aguiar" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Pregador brasileiro, Maurício Aguiar dedica sua vida a anunciar o evangelho com
                convicção e sensibilidade. Suas mensagens unem profundidade bíblica e linguagem
                acessível, alcançando pessoas de todas as idades.
              </p>
              <p>
                Casado e comprometido com a família, ele tem servido em igrejas, congressos e
                conferências, sempre com o mesmo propósito: conduzir corações a Cristo.
              </p>
              <p>
                Nas redes sociais, suas pregações somam milhares de seguidores que acompanham
                diariamente palavras de fé, restauração e esperança.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
