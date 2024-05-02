import { Action } from 'redux';
import { Movie } from '../MovieListBest/MovieListBest';

export interface FavoriteMoviesState {
  favoriteMovies: Movie[];
}

export const initialFavoriteMoviesState: FavoriteMoviesState = {
  favoriteMovies: [],
};

export interface AddFavoriteMovieAction extends Action {
    type: 'ADD_FAVORITE_MOVIE';
    payload: Movie;
  }

export type FavoriteMoviesAction = AddFavoriteMovieAction;

export const favoriteMoviesReducer = (
  state: FavoriteMoviesState = initialFavoriteMoviesState,
  action: FavoriteMoviesAction
): FavoriteMoviesState => {
  switch (action.type) {
    case 'ADD_FAVORITE_MOVIE':
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload],
      };
    default:
      return state;
  }
};
