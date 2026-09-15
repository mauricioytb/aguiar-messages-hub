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
