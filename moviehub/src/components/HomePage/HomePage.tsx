import React from "react";
import MovieListTop10 from "../MovieListTop10/MovieListTop10";
import Header from "../Header/Header";
import MovieListBest from "../MovieListBest/MovieListBest";
const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <MovieListBest></MovieListBest>
      <MovieListTop10 />
    </>
  );
};

export default HomePage;