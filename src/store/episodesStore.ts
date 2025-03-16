import { create } from "zustand";
import { getEpisodes } from "../services/episodeService";
import { getFavorites, setFavorites } from "../utils/storage";
import { Episode } from "../types/common.types";

type EpisodesStore = {
  episodes: Episode[];
  favorites: Record<number, boolean>;
  fetchEpisodes: () => Promise<void>;
  toggleFavorite: (id: number) => void;
}

export const useEpisodesStore = create<EpisodesStore>((set) => ({
  episodes: [],
  favorites: {},
  fetchEpisodes: async () => {
    const episodes = await getEpisodes();
    const favorites = await getFavorites();
    set({ episodes, favorites });
  },
  toggleFavorite: async (id) => {
    set((state) => {
      const updatedFavorites = {
        ...state.favorites,
        [id]: !state.favorites[id],
      };
      setFavorites(updatedFavorites);
      return { favorites: updatedFavorites };
    });
  },
}));
