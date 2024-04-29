import axios, { AxiosInstance } from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const instance: AxiosInstance = axios.create({
  baseURL: "https://api.kinopoisk.dev/v1.4",
  headers: {
    "X-API-KEY": "FSSVY84-B6F49QM-NWF2T69-5B387DV",
    accept: "application/json",
  },
});

interface Movie {
  id: number;
  name: string;
  poster: {
    url: string;
  };
  description: string;
  // Добавьте другие свойства фильма, которые вам нужны
}

interface MovieDetailsParams extends Record<string, string | undefined> {
    id: string;
  }

interface MovieDetailsProps {}

const MovieDetails: React.FC<MovieDetailsProps> = () => {
  const { id } = useParams<MovieDetailsParams>();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await instance.get(`/movie/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.name}</h1>
      <img src={movie.poster.url} alt={movie.name} />
      <p>{movie.description}</p>
      {/* Добавьте другие детали о фильме, которые вы хотите отобразить */}
    </div>
  );
};

export default MovieDetails;
