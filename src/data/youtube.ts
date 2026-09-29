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
 * Playlist de pregações do Pb. Maurício Aguiar.
 * Contém apenas as pregações, não todos os vídeos do canal.
 */
export const YOUTUBE_UPLOADS_PLAYLIST_ID = "PLW7mV9gcqx6A";

/** Playlist "Devocionais | Pb. Mauricio aguiar". */
export const YOUTUBE_DEVOCIONAIS_PLAYLIST_ID = "PLSqR5AzF1N54";

/** Miniatura oficial do YouTube em máxima resolução. */
export const youtubeThumb = (id: string) =>
  `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

/** Miniatura de fallback (garantida para todo vídeo). */
export const youtubeThumbFallback = (id: string) =>
  `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
