export type Episode =  {
    id: number;
    name: string;
    season: number;
    number: number;
    airdate: string;
    runtime: number;
    rating?: { average: number };
    image?: { medium: string };
  }