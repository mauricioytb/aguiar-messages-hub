import { createFileRoute } from "@tanstack/react-router";

import { DevocionalCard } from "@/components/site/DevocionalCard";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { SectionHeading } from "@/components/site/SectionHeading";
import { devocionais } from "@/data/site";

export const Route = createFileRoute("/devocionais")({
  head: () => ({
    meta: [
      { title: "Devocionais — Pb. Maurício Aguiar" },
      {
        name: "description",
        content:
          "Devocionais em vídeo do Pb. Maurício Aguiar disponíveis no YouTube.",
      },
      { property: "og:title", content: "Devocionais — Pb. Maurício Aguiar" },
      {
        property: "og:description",
        content: "Devocionais em vídeo do Pb. Maurício Aguiar no YouTube.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Devocionais,
});

function Devocionais() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          eyebrow="Devocionais"
          title="Devocionais em vídeo"
          description="Mensagens curtas para o seu dia a dia. Clique para assistir direto no YouTube."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {devocionais.map((d) => (
            <DevocionalCard key={d.id} devocional={d} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
