import axios, { AxiosInstance } from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";

export interface Movie {
  id: number;
  name: string;
  poster: {
    previewUrl: string;
  };
  rating: {
    kp: number;
  };
  year: number;
  description: string;
}

export interface MoviesResponse {
  docs: Movie[];
}

const instance: AxiosInstance = axios.create({
  baseURL: "https://api.kinopoisk.dev/v1.4",
  headers: {
    "X-API-KEY": "FSSVY84-B6F49QM-NWF2T69-5B387DV",
    accept: "application/json",
  },
});

export const getMovies = async (page?: number, limit?: number, id?: number, rating?:number,year?:number): Promise<MoviesResponse> => {
  const response = await instance.get<MoviesResponse>(`movie?page=${page}&limit=${limit}&id=1047883&id=326&id=258687&`);
  return response.data;
};

const MovieListBest = () => {
  const [movies, setMovies] = useState<MoviesResponse | null>(null);
  // const [favoriteMovies, setFavoriteMovies] = useState<number[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData: MoviesResponse = await getMovies(1, 4, 6.7, 7,);
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  

  const settings = {
    className: "slider variable-width",
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  return (
    <div className="main-container">
      <div className="container">
        <h1>Лучшее</h1>
        <div className="row-column-films">
          <Slider {...settings}>
            {movies?.docs.map((movie) => (
              <div key={movie.id} className="movie-block">
                <Link to={`/movies/${movie.id}`}>
                  <img src={movie.poster.previewUrl} alt={movie.name} />
                  <h2>{movie.name}</h2>
                  {/* <p>{movie.description}</p> */}
                  <div className={`block-rating ${movie.rating.kp > 6 ? 'rating-above-6' : movie.rating.kp > 5 ? 'rating-above-5' : ''}`}>
                    <p>{movie.rating.kp}</p>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListBest;
