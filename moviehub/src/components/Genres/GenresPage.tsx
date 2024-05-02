import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './GenresPage.scss';

interface Movie {
  id: number;
  name: string;
  poster: {
    url: string;
  };
  year:string;
}

interface RouteParams extends Record<string, string | undefined> {
    genre?: string;
  }

  const GenresPage = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
  
    const { genre } = useParams<RouteParams>();
  
    useEffect(() => {
      if (genre) {
        const fetchMovies = async () => {
          try {
            const response = await axios.get<{ docs: Movie[] }>(
              `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10&genres.name=${genre}`,
              {
                headers: {
                  'X-API-KEY': 'FSSVY84-B6F49QM-NWF2T69-5B387DV',
                  accept: 'application/json',
                },
              }
            );
  
            const moviesList = response.data.docs.map((movie) => ({
              id: movie.id,
              name: movie.name,
              poster: movie.poster,
              year:movie.year,
            }));
            console.log(moviesList)
            setMovies(moviesList);
          } catch (error) {
            console.error(error);
          }
        };
  
        fetchMovies();
      }
    }, [genre]);
  
    return (
      <div className='genres-page'>
        <h1>Выберите жанр</h1>
        <div className="genres-buttons">
        <ul>
          <li>
            <Link to="/genre/драма">
              <button>Драма</button>
            </Link>
          </li>
          <li>
            <Link to="/genre/комедия">
              <button>Комедия</button>
            </Link>
          </li>
          <li>
            <Link to="/genre/триллер">
              <button>Триллер</button>
            </Link>
          </li>
          <li>
            <Link to="/genre/детектив">
              <button>Детектив</button>
            </Link>
          </li>
          <li>
            <Link to="/genre/ужасы">
              <button>Ужасы</button>
            </Link>
          </li>
          <li>
            <Link to="/genre/мультфильмы">
              <button>Мультфильмы</button>
            </Link>
          </li>
        </ul>
        </div>
        {genre && (
          <div className='genres-film-block'>
            <h2>{genre}</h2>
            <ul>
              {movies.map((movie) => (
                <li key={movie.id}>
                  <Link to={`/movies/${movie.id}`}>
                    <img src={movie.poster.url} alt={movie.name} />
                    <div className="movie-text">
                    <h2>{movie.name}</h2>
                    <h2>{movie.year}</h2>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };
  

export default GenresPage;