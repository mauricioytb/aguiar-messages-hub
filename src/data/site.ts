import capaHero from "@/assets/mauricio-pregando.jpg.asset.json";
import capa1 from "@/assets/msg-1.png.asset.json";
import capa2 from "@/assets/msg-2.png.asset.json";
import capa3 from "@/assets/msg-3.jpg.asset.json";
import capa4 from "@/assets/msg-4.png.asset.json";

export const site = {
  nome: "Mauricio Aguiar",
  titulo: "Pb. Maurício Aguiar",
  tagline: "Seguindo à Cristo.",
  whatsappNumero: "(81) 9505-3747",
  whatsappLink: "https://wa.me/5581995053747",
  instagram: "https://instagram.com/mauricioaguiaroficial",
  tiktok: "https://tiktok.com/@mauricioaguiaroficial",
};

export const heroImage = capaHero.url;

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
  { id: "deus-nao-vai-desistir-de-ti", titulo: "Deus não vai desistir de ti", capa: capa1.url },
  { id: "uma-fonte-na-solidao", titulo: "Uma fonte na solidão", capa: capa2.url },
  { id: "deus-precisa-te-pesar", titulo: "Deus precisa te pesar", capa: capa3.url },
  { id: "coracao-angustiado", titulo: "Coração angustiado", capa: capa4.url },
];
