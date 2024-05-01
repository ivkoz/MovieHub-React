import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieSearch.scss';
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
const axiosInstance = axios.create({
    baseURL: 'https://api.kinopoisk.dev/v1.4',
    headers: {
      'X-API-KEY': 'FSSVY84-B6F49QM-NWF2T69-5B387DV',
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  });

interface Movie {
  id: number;
  name: string;
  poster: object;
  year: number;
  // Добавьте другие необходимые свойства
}

const MovieSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    if (searchQuery.length > 2) { // Минимальная длина для поиска
      searchMovies(searchQuery);
    }
  }, [searchQuery]);

  const searchMovies = async (query: string) => {
    try {
      const response = await axiosInstance.get('/movie/search', {
        params: {
          page: 1,
          limit: 10,
          query,
        },
      });

      setMovies(response.data.docs);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <div className='searchContainer'>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Поиск по фильмам и сериалам"
      />
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img src={(movie.poster as any).url} alt={movie.name} />
              {movie.name} ({movie.year})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieSearch;