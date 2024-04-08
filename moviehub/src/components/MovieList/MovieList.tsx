import React, { useEffect, useState } from "react";
import { getMovies, MoviesResponse } from "../../api/api";
import './MovieList.scss';
const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<MoviesResponse | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData: MoviesResponse = await getMovies(3, 4, 5);
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {movies?.docs.map((movie) => (
        <div key={movie.id} className="movie-block">
          <h2>{movie.name}</h2>
          <img src={movie.poster.previewUrl} alt={movie.name} />
          <p>{movie.description}</p>
          <p>Рейтинг: {movie.rating.kp}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
