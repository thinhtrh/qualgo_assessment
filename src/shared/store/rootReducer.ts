import { combineReducers } from '@reduxjs/toolkit';
import moviesSlice from './slices/movies';
;

const rootReducer = combineReducers({
  movies: moviesSlice,
});

export default rootReducer;