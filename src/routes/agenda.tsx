import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, MapPin } from "lucide-react";

import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { SectionHeading } from "@/components/site/SectionHeading";
import { agenda, site } from "@/data/site";

export const Route = createFileRoute("/agenda")({
  head: () => ({
    meta: [
      { title: "Agenda — Pb. Maurício Aguiar" },
      {
        name: "description",
        content:
          "Próximos eventos e compromissos do Pb. Maurício Aguiar. Convide para o seu.",
      },
      { property: "og:title", content: "Agenda — Pb. Maurício Aguiar" },
      {
        property: "og:description",
        content: "Próximos eventos e compromissos do Pb. Maurício Aguiar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Agenda,
});

type Evento = {
  id: string;
  data: string;
  titulo: string;
  local: string;
  cidade: string;
};

const eventos: Evento[] = agenda;

const formatarData = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  const data = new Date(y ?? 1970, (m ?? 1) - 1, d ?? 1);
  return {
    dia: String(d ?? 1).padStart(2, "0"),
    mes: data.toLocaleDateString("pt-BR", { month: "short" }).replace(".", ""),
    extenso: data.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    }),
  };
};

function Agenda() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          eyebrow="Agenda"
          title="Próximos eventos"
          description="Confira onde o Pb. Maurício Aguiar estará ministrando. Para convidar, fale pelo WhatsApp."
        />

        <div className="mt-10 space-y-4">
          {eventos.map((e) => {
            const { dia, mes, extenso } = formatarData(e.data);
            return (
              <article
                key={e.id}
                className="flex flex-col gap-4 rounded-xl border border-border/60 bg-card p-5 shadow-[var(--shadow-soft)] sm:flex-row sm:items-center"
              >
                <div className="flex items-center gap-4 sm:w-56 sm:shrink-0">
                  <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <span className="font-display text-2xl leading-none">{dia}</span>
                    <span className="text-[11px] font-semibold uppercase tracking-widest">
                      {mes}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    <CalendarDays size={14} className="mr-1 inline -mt-0.5 text-accent" />
                    {extenso}
                  </p>
                </div>

                <div className="flex-1">
                  <h3 className="font-display text-xl leading-tight tracking-wide text-foreground uppercase">
                    {e.titulo}
                  </h3>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin size={15} className="text-accent" />
                    {e.local} — {e.cidade}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-xl border border-border/60 bg-secondary/40 p-6 text-center md:p-10">
          <h2 className="font-display text-2xl leading-tight tracking-tight text-foreground uppercase sm:text-3xl">
            Convide para o seu evento
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            Agendas abertas para cultos, congressos e conferências. Fale
            diretamente pelo WhatsApp.
          </p>
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold tracking-wide text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            {site.whatsappNumero}
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
