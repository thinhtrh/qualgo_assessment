import { IMovieDetail, IMoviesRequest } from '@features/movies/models';
import { IMovies } from '@features/movies/models/IMovies';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IMoviesState } from '@shared/models';
import { RequestResponse } from '@shared/services/apis';

const initialState: IMoviesState = {
  isFetching: false,
  discoveryMovies: [],
  discoveryPage: 1,
  totalDiscoveryPage: 0,
  searchMovies: [],
  query: null,
  searchPage: 1,
  totalSearchPage: 0,
  selectedMovie: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {
    getDiscoveryMoviesAction: (state, action: PayloadAction<IMoviesRequest>) => {
      state.isFetching = true;
      state.discoveryPage = action.payload.page;
      state.discoveryMovies = action.payload.page == 1 ? [] : state.discoveryMovies;
    },
    getDiscoveryMoviesSuccessAction: (state, action: PayloadAction<RequestResponse<IMovies>>) => {
      state.isFetching = false;
      state.discoveryPage = state.discoveryPage + 1;
      state.discoveryMovies = [...state.discoveryMovies, ...action.payload.data.results];
      state.totalDiscoveryPage = action.payload.data.totalPages;
    },
    searchMoviesAction: (state, action: PayloadAction<IMoviesRequest>) => {
      state.isFetching = true;
      state.searchPage = action.payload.page;
      state.query = action.payload.query;
      state.searchMovies = action.payload.page == 1 ? [] : state.searchMovies;
    },
    searchMoviesSuccessAction: (state, action: PayloadAction<RequestResponse<IMovies>>) => {
      state.searchPage = state.searchPage + 1;
      state.searchMovies = [...state.searchMovies, ...action.payload.data.results];
      state.totalSearchPage = action.payload.data.totalPages;
      state.isFetching = false;
    },
    getMovieDetailAction: (state, action: PayloadAction<null>) => {
      state.selectedMovie = null;
      state.isFetching = true;
    },
    getMovieDetailSuccessAction: (state, action: PayloadAction<RequestResponse<IMovieDetail>>) => {
      state.selectedMovie = action.payload.data;
      state.isFetching = false;
    },
  },
});

export const {
  getDiscoveryMoviesAction,
  getDiscoveryMoviesSuccessAction,
  searchMoviesAction,
  searchMoviesSuccessAction,
  getMovieDetailAction,
  getMovieDetailSuccessAction,
} = moviesSlice.actions;

const moviesReducer = moviesSlice.reducer;

export default moviesReducer;
