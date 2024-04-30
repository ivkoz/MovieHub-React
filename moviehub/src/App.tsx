import React from 'react';
import './App.scss';
import MovieListTop10 from './components/MovieListTop10/MovieListTop10';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header'
import MovieListBest from './components/MovieListBest/MovieListBest';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetails from './components/MovieDetails/MovieDetails';
import HomePage from './components/HomePage/HomePage';


function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/movies/:id" element={<MovieListTop10 />} />
        </Routes>
        <Navigation></Navigation>
    </Router>
    </>
  );
}

export default App;
