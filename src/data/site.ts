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

export const heroImage = "/mauricio-hero.jpg";

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
 * Mensagens em destaque — pregações e vídeos do canal.
 *
 * Esta lista serve de fallback quando a chave `YOUTUBE_API_KEY` ainda não foi
 * configurada. Com a chave ativa, `src/lib/youtube.functions.ts` substitui
 * estes dados pelos vídeos atuais do canal direto da YouTube Data API v3.
 *
 * As capas vêm da miniatura oficial do YouTube (ver MensagemCard), então
 * `capa` é opcional.
 */
export type Mensagem = {
  id: string;
  titulo: string;
  capa?: string;
  youtubeId?: string;
};

export const mensagens: Mensagem[] = [
  { id: "quando-deus-se-cala", titulo: "Quando Deus se cala", youtubeId: "5Px3AFxvHoA" },
  { id: "deus-quer-te-perdoar", titulo: "Deus quer te perdoar — Salmos 23", youtubeId: "4aua3vlz1vI" },
  { id: "deus-nao-vai-desistir-de-ti", titulo: "Deus não vai desistir de ti", youtubeId: "qDGIytwyruU" },
  { id: "deus-precisa-te-pesar", titulo: "Deus precisa te pesar", youtubeId: "0456t7I-QxY" },
  { id: "coracao-angustiado", titulo: "Coração angustiado", youtubeId: "MUhXbMms6kU" },
  { id: "as-misericordias-de-deus", titulo: "As misericórdias de Deus", youtubeId: "WnUB5LCnBls" },
  { id: "ainda-nao-e-o-fim", titulo: "Ainda não é o fim", youtubeId: "hhstmPytvfo" },
  { id: "deus-conhece-tua-dor", titulo: "Deus conhece tua dor", youtubeId: "fz9c9lhlTIw" },
  { id: "paz-em-meio-ao-caos", titulo: "Paz em meio ao caos — Salmos 29", youtubeId: "jPBOYwlwnqQ" },
  { id: "uma-fonte-na-solidao", titulo: "Uma fonte na solidão", youtubeId: "s57V86Q4l_4" },
  { id: "nao-fuja-de-deus", titulo: "Não fuja de Deus", youtubeId: "fHtMSZG_GUs" },
  { id: "tu-es-a-escolha-de-deus", titulo: "Tu és a escolha de Deus", youtubeId: "iKoBzZvV5o8" },
  { id: "deus-conhece-tua-estrutura", titulo: "Deus conhece tua estrutura", youtubeId: "TrzEigYAV_c" },
  { id: "a-bondade-de-deus", titulo: "A bondade de Deus", youtubeId: "SQnX_d7GIVc" },
  { id: "devocional-salmos-23", titulo: "Devocional — Salmos 23", youtubeId: "36XDU67UVnM" },
  { id: "devocional-isaias-5", titulo: "Devocional — Isaías 5", youtubeId: "2e7DeKgZNp4" },
  { id: "teu-passado-nao-importa", titulo: "Teu passado não importa", youtubeId: "aqfvUs_m2uo" },
  { id: "veja-de-onde-deus-te-tirou", titulo: "Veja de onde Deus te tirou", youtubeId: "ud9ydJVGVfQ" },
  { id: "deus-esta-contigo", titulo: "Deus está contigo", youtubeId: "oF842ojn9oI" },
  { id: "meu-testemunho", titulo: "Meu testemunho — Deus mudou meus planos", youtubeId: "RzANDqP2a_c" },
];

/**
 * Devocionais em vídeo no YouTube.
 *
 * Fallback estático da playlist "Devocionais | Pb. Mauricio aguiar". Com a
 * chave `YOUTUBE_API_KEY` ativa, `src/lib/youtube.functions.ts` retorna os
 * itens atuais da playlist.
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
