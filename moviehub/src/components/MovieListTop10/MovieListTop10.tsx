import React, { useEffect, useState } from "react";
import { getMovies, MoviesResponse } from "../../api/api";
import './MovieList.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MovieListTop10: React.FC = () => {
  const [movies, setMovies] = useState<MoviesResponse | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData: MoviesResponse = await getMovies(1, 4, 6.7);
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
      <h1>То что вам может понравится</h1>
      <div className="row-column-films">
      <Slider {...settings}>
        {movies?.docs.map((movie) => (
          <div key={movie.id} className="movie-block">
            <img src={movie.poster.previewUrl} alt={movie.name} />
            <h2>{movie.name}</h2>
            {/* <p>{movie.description}</p> */}
            {}
            <div className={`block-rating ${movie.rating.kp > 6 ? 'rating-above-6' : movie.rating.kp > 5 ? 'rating-above-5' : ''}`}>
              <p>{movie.rating.kp}</p>
          </div>
          </div>
        ))}
        </Slider>
    </div>
    </div>
    </div>
  );
};

export default MovieListTop10;
