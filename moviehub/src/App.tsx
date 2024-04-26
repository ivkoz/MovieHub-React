import React from 'react';
import './App.scss';
import MovieListTop10 from './components/MovieListTop10/MovieListTop10';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header'

function App() {
  return (
    <>
    <Header></Header>
    <MovieListTop10></MovieListTop10>
    <Navigation></Navigation>
    </>
  );
}

export default App;
