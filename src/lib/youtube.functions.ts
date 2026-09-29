import { createServerFn } from "@tanstack/react-start";

import {
  type Devocional,
  type Mensagem,
  devocionais as devocionaisSeed,
  mensagens as mensagensSeed,
} from "@/data/site";
import {
  YOUTUBE_DEVOCIONAIS_PLAYLIST_ID,
  YOUTUBE_UPLOADS_PLAYLIST_ID,
} from "@/data/youtube";

/**
 * Limpa títulos vindos do YouTube removendo sufixos recorrentes
 * ("| Pb. Maurício Aguiar", "| IEADC", "| AD Belém Carapicuíba"...),
 * unindo os segmentos restantes com travessão.
 */
function cleanTitle(raw: string): string {
  const parts = raw
    .split("|")
    .map((p) => p.trim())
    .filter(Boolean);
  const keep = parts.filter(
    (p) =>
      !/^(Pb\.?|Pb )\b/i.test(p) &&
      !/Maur[íi]cio\s+Aguiar/i.test(p) &&
      !/^IEADC$/i.test(p) &&
      !/^AD\b/i.test(p) &&
      !/Carapic[uú]iba/i.test(p),
  );
  const title = (keep.length ? keep : parts).join(" — ");
  return title.replace(/\s+/g, " ").trim() || raw.trim();
}

type PlaylistItemSnippet = {
  title?: string;
  resourceId?: { videoId?: string };
};

type PlaylistItemsResponse = {
  items?: Array<{ snippet?: PlaylistItemSnippet }>;
};

async function fetchPlaylist(playlistId: string): Promise<Mensagem[] | null> {
  const key = process.env["YOUTUBE_API_KEY"];
  if (!key) return null;

  const url =
    `https://www.googleapis.com/youtube/v3/playlistItems` +
    `?part=snippet&maxResults=50&playlistId=${playlistId}&key=${key}`;

  try {
    const res = await fetch(url, { headers: { accept: "application/json" } });
    if (!res.ok) {
      console.error(
        `[YouTube API] Failed to fetch playlist ${playlistId}: ${res.status} ${res.statusText}`,
      );
      return null;
    }
    const json = (await res.json()) as PlaylistItemsResponse;
    const items = json.items ?? [];

    const result: Mensagem[] = [];
    for (const item of items) {
      const videoId = item.snippet?.resourceId?.videoId;
      if (!videoId) continue;
      result.push({
        id: videoId,
        titulo: cleanTitle(item.snippet?.title ?? ""),
        youtubeId: videoId,
      });
    }
    return result;
  } catch (error) {
    console.error(
      `[YouTube API] Error fetching playlist ${playlistId}:`,
      error instanceof Error ? error.message : String(error),
    );
    return null;
  }
}

/**
 * Mensagens do canal (pregações + vídeos).
 *
 * - Com a chave `YOUTUBE_API_KEY` configurada: retorna os vídeos atuais do
 *   canal direto da YouTube Data API v3.
 * - Sem a chave: retorna a lista estática em `src/data/site.ts`.
 */
export const getMensagens = createServerFn({ method: "GET" }).handler(
  async () => {
    const live = await fetchPlaylist(YOUTUBE_UPLOADS_PLAYLIST_ID);
    return live ?? mensagensSeed;
  },
);

/**
 * Devocionais (playlist "Devocionais | Pb. Mauricio aguiar").
 *
 * Mesma lógica de `getMensagens`: usa a API quando a chave existir e
 * retorna a lista estática caso contrário.
 */
export const getDevocionais = createServerFn({ method: "GET" }).handler(
  async () => {
    const live = await fetchPlaylist(YOUTUBE_DEVOCIONAIS_PLAYLIST_ID);
    return (live ?? devocionaisSeed) as Devocional[];
  },
);
