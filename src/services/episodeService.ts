import { SERVICE_URLS } from "../constants/common";
import apiClient from "./apiService";

type Episode = {
  id: number;
  name: string;
  image?: { medium: string };
};

export const getEpisodes = async (): Promise<Episode[]> => {
  try {
    const response = await apiClient.get<Episode[]>(SERVICE_URLS.EPISODE_LIST);
    return response.data as Episode[];
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log("Error fetching episodes:", error.message);
    } else {
      console.log("An unknown error occurred.");
    }
    return [];
  }
};
