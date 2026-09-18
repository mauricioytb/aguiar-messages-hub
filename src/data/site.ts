import capaHero from "@/assets/mauricio-pregando.jpg.asset.json";
import capa1 from "@/assets/msg-1.png.asset.json";
import capa3 from "@/assets/msg-3.jpg.asset.json";
import capa4 from "@/assets/msg-4.png.asset.json";

export const site = {
  nome: "Mauricio Aguiar",
  titulo: "Pb. Maurício Aguiar",
  tagline: "Um chamado. Uma mensagem. Uma missão.",
  whatsappNumero: "(81) 9505-3747",
  whatsappLink: "https://wa.me/5581995053747",
  youtube: "https://www.youtube.com/@MauricioAguiarcanal",
  instagram: "https://instagram.com/mauricioaguiaroficial",
  tiktok: "https://tiktok.com/@mauricioaguiaroficial",
};

export const heroImage = capaHero.url;

/**
 * Redes sociais oficiais.
 */
export const redes = [
  { id: "youtube", nome: "YouTube", handle: "@MauricioAguiarcanal", href: site.youtube },
  { id: "instagram", nome: "Instagram", handle: "@mauricioaguiaroficial", href: site.instagram },
  { id: "tiktok", nome: "TikTok", handle: "@mauricioaguiaroficial", href: site.tiktok },
] as const;

/** Monta o link de um vídeo do YouTube a partir do seu ID. */
export const youtubeUrl = (id: string) => `https://www.youtube.com/watch?v=${id}`;

/**
 * Mensagens em destaque.
 * Estrutura preparada para receber dados da API do YouTube no futuro:
 * basta preencher `youtubeId` e trocar a origem desta lista por um fetch.
 */
export type Mensagem = {
  id: string;
  titulo: string;
  capa: string;
  youtubeId?: string;
};

export const mensagens: Mensagem[] = [
  {
    id: "deus-nao-vai-desistir-de-ti",
    titulo: "Deus não vai desistir de ti",
    capa: capa1.url,
    youtubeId: "qDGIytwyruU",
  },
  {
    id: "deus-precisa-te-pesar",
    titulo: "Deus precisa te pesar",
    capa: capa3.url,
    youtubeId: "0456t7I-QxY",
  },
  {
    id: "coracao-angustiado",
    titulo: "Coração angustiado",
    capa: capa4.url,
    youtubeId: "MUhXbMms6kU",
  },
];

/**
 * Devocionais em vídeo no YouTube.
 * Estrutura preparada para receber dados da API do YouTube no futuro:
 * basta preencher `youtubeId` e trocar a origem desta lista por um fetch.
 */
export type Devocional = {
  id: string;
  titulo: string;
  youtubeId?: string;
};

export const devocionais: Devocional[] = [
  {
    id: "deus-quer-te-perdoar",
    titulo: "Deus quer te perdoar — Salmos 23",
    youtubeId: "4aua3vlz1vI",
  },
  {
    id: "as-misericordias-de-deus",
    titulo: "As misericórdias de Deus",
    youtubeId: "WnUB5LCnBls",
  },
  {
    id: "paz-em-meio-ao-caos",
    titulo: "Paz em meio ao caos — Salmos 29",
    youtubeId: "jPBOYwlwnqQ",
  },
  {
    id: "a-bondade-de-deus",
    titulo: "A bondade de Deus",
    youtubeId: "SQnX_d7GIVc",
  },
  {
    id: "devocional-salmos-23",
    titulo: "Devocional — Salmos 23",
    youtubeId: "36XDU67UVnM",
  },
  {
    id: "devocional-isaias-5",
    titulo: "Devocional — Isaías 5",
    youtubeId: "2e7DeKgZNp4",
  },
  {
    id: "deus-esta-contigo",
    titulo: "Deus está contigo",
    youtubeId: "oF842ojn9oI",
  },
];

/**
 * Agenda de eventos.
 * Itens de exemplo — substitua pelos eventos reais quando disponíveis.
 */
export type EventoAgenda = {
  id: string;
  data: string; // ISO yyyy-mm-dd
  titulo: string;
  local: string;
  cidade: string;
};

export const agenda: EventoAgenda[] = [
  {
    id: "evt-1",
    data: "2026-10-11",
    titulo: "Culto de Avivamento",
    local: "Igreja Central",
    cidade: "Recife, PE",
  },
  {
    id: "evt-2",
    data: "2026-11-08",
    titulo: "Congresso de Jovens",
    local: "Templo Sede",
    cidade: "Caruaru, PE",
  },
  {
    id: "evt-3",
    data: "2026-12-06",
    titulo: "Conferência de Fé",
    local: "Arena Municipal",
    cidade: "Olinda, PE",
  },
];
