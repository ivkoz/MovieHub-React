import React from 'react';
import './App.scss';
import MovieList from './components/MovieList/MovieList';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <>
    <MovieList></MovieList>
    <Navigation></Navigation>
    </>
  );
}

export default App;
