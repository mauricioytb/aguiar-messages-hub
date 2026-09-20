import { queryOptions } from "@tanstack/react-query";

import type { Devocional, Mensagem } from "@/data/site";
import { getDevocionais, getMensagens } from "./youtube.functions";

export const mensagensQuery = queryOptions({
  queryKey: ["mensagens"] as const,
  queryFn: async (): Promise<Mensagem[]> => getMensagens(),
});

export const devocionaisQuery = queryOptions({
  queryKey: ["devocionais"] as const,
  queryFn: async (): Promise<Devocional[]> => getDevocionais(),
});
