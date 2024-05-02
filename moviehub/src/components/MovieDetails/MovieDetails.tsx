import axios, { AxiosInstance } from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import './MovieDetails.scss'
import IconStar from '../../img/icons/star.png';
import { parse } from "url";

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
  rating:{
    kp:number;
  };
  year:number;
}

interface MovieDetailsParams extends Record<string, string | undefined> {
    id: string;
  }

interface MovieDetailsProps {}

const MovieDetails = () => {
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
      <div className="background-img"><img src={movie.poster.url} alt={movie.name} /></div>
      <div className="text-content">
        <img src={movie.poster.url} alt={movie.name} className="img-poster"/>
        <h1>{movie.name}</h1>
        <div className="movie-details">
          <div className="block-rating">
            <img src={IconStar} alt="" className="icon-star"/>
            <h2 className="h2-rating">{parseFloat(movie.rating.kp.toFixed(1))}</h2>
          </div>
          <h2>Год: {movie.year}</h2>
        </div>
        <p>{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieDetails;