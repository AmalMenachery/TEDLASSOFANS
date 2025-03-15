import axios from 'axios';

const API_URL = 'https://api.tvmaze.com/shows/44458/episodes';

interface Episode {
  id: number;
  name: string;
  image?: { medium: string };
}

export const getEpisodes = async (): Promise<Episode[]> => {
  try {
    const response = await axios.get<Episode[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching episodes:', error);
    return [];
  }
};
