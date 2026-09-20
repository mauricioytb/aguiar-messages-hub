import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MensagemCard } from "@/components/site/MensagemCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { mensagensQuery } from "@/lib/youtube-queries";

export const Route = createFileRoute("/mensagens")({
  head: () => ({
    meta: [
      { title: "Mensagens — Pb. Maurício Aguiar" },
      {
        name: "description",
        content: "Pregações e mensagens em destaque do Pb. Maurício Aguiar.",
      },
      { property: "og:title", content: "Mensagens — Pb. Maurício Aguiar" },
      {
        property: "og:description",
        content: "Assista e acompanhe as pregações do Pb. Maurício Aguiar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  loader: ({ context }) => context.queryClient.ensureQueryData(mensagensQuery),
  component: Mensagens,
});

function Mensagens() {
  const { data: mensagens } = useSuspenseQuery(mensagensQuery);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          eyebrow="Mensagens"
          title="Pregações"
          description="Uma seleção de mensagens ministradas em cultos, congressos e conferências."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mensagens.map((m) => (
            <MensagemCard key={m.id} mensagem={m} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
