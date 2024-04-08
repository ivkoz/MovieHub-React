import axios, { AxiosInstance } from "axios";

export interface Movie {
  id: number;
  name: string;
  poster: {
    previewUrl: string;
  };
  rating: {
    kp: number;
  };
  description: string;
}

export interface MoviesResponse {
  docs: Movie[];
}

const instance: AxiosInstance = axios.create({
  baseURL: "https://api.kinopoisk.dev/v1.4/",
  headers: {
    "X-API-KEY": "FSSVY84-B6F49QM-NWF2T69-5B387DV",
    accept: "application/json",
  },
});

export const getMovies = async (page: number, limit: number, ratingKp: number): Promise<MoviesResponse> => {
  const response = await instance.get<MoviesResponse>(`movie?page=${page}&limit=${limit}&rating.kp=${ratingKp}`);
  return response.data;
};
