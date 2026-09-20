/**
 * Configuração do canal e da playlist de devocionais no YouTube.
 *
 * Usada por `src/lib/youtube.functions.ts` para sincronizar os vídeos
 * automaticamente via YouTube Data API v3 — ativada assim que a chave
 * `YOUTUBE_API_KEY` for adicionada ao projeto. Enquanto a chave não existir,
 * o site usa a lista estática definida em `src/data/site.ts`.
 */

/** ID do canal do Pb. Maurício Aguiar (@MauricioAguiarcanal). */
export const YOUTUBE_CHANNEL_ID = "UC6D8WlNAZdft1rK6Ua_tEKw";

/**
 * Playlist "uploads" do canal — gerada a partir do channelId trocando o
 * prefixo `UC` por `UU`. A YouTube Data API lista os vídeos do canal a
 * partir dela.
 */
export const YOUTUBE_UPLOADS_PLAYLIST_ID = `UU${YOUTUBE_CHANNEL_ID.slice(2)}`;

/** Playlist "Devocionais | Pb. Mauricio aguiar". */
export const YOUTUBE_DEVOCIONAIS_PLAYLIST_ID = "PLSqR5AzF1N54";

/** Miniatura oficial do YouTube em máxima resolução. */
export const youtubeThumb = (id: string) =>
  `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

/** Miniatura de fallback (garantida para todo vídeo). */
export const youtubeThumbFallback = (id: string) =>
  `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
