import {
  mockMovies,
  Genres
} from '../mocks/films';
import { ActionType } from '../const';
import type {
  Action,
  State
} from './type';

const defaultState = {
  genre: Genres.AllGenres,
  movies: mockMovies,
  defaultMovies: mockMovies,
};

// Пока без JSDoc
// reducer принимает 2 параметра.
// 1) state это объект, с ключами: genre - текущий жанр; movies - массив, содержащий объекты, каждый объект содержит инфу про кино, фильтруется при смене жанра;
//    defaultMovies - то же что и movies, но никогда не изменяется, отдается в случае сброса текущего жанра на дефолт, т.е. на 'все жанры'.
// 2) Action - объект с двумя значениями-действиями, ChangeGenre - приходи при смене жанра на любой, кроме дефолтного, DefaultGenre - при смене на дефолт, т.е. на 'все жанры'.

export const reducer = (state: State = defaultState, action: Action): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return { ...state, genre: action.payload, movies: mockMovies.filter((movie) => movie.genre === action.payload) };
    case ActionType.DefaultGenre:
      return { ...state, genre: action.payload, movies: mockMovies };
    default:
      return state;
  }
};