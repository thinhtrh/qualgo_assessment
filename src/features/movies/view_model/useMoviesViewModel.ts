import { IMoviesRequest } from '@features/movies/models';
import { getMovieDetail, getMovies } from '@features/movies/services';
import { navigate } from '@shared/services/navigations';
import { RootState } from '@shared/store';
import {
  getDiscoveryMoviesAction,
  getDiscoveryMoviesSuccessAction,
  getMovieDetailAction,
  getMovieDetailSuccessAction,
  searchMoviesAction,
  searchMoviesSuccessAction,
} from '@shared/store/slices/movies';
import { debounce } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
const useMoviesViewModel = () => {
  const movies = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();

  const onGetDiscoveryMovies = async (page?: number) => {
    const queryPage: number = page || movies.discoveryPage;
    if (queryPage == 1 || queryPage < movies.totalDiscoveryPage) {
      const request: IMoviesRequest = { query: null, page: queryPage };
      dispatch(getDiscoveryMoviesAction(request));
      const res = await getMovies(request);
      if (res.status == 'success') dispatch(getDiscoveryMoviesSuccessAction(res));
    }
  };

  const onGetNextPageDiscoveryMovies = async () => {
    onGetDiscoveryMovies();
  };

  const onRefreshDiscoveryMovies = async () => {
    onGetDiscoveryMovies(1);
  };

  const search = async (key: string, page: number) => {
    const request: IMoviesRequest = { query: key, page: page };
    dispatch(searchMoviesAction(request));
    const res = await getMovies(request);
    if (res.status == 'success') dispatch(searchMoviesSuccessAction(res));
  };

  const debouncedSearch = debounce((key: string) => {
    search(key, 1);
  }, 0);

  const onSearchMovies = (key: string) => {
    if (!movies.isFetching && (key.length > 2 || key.length == 0)) {
      debouncedSearch(key);
    }
  };

  const onGetMovieDetail = async (movieId: number) => {
    navigate('MovieDetail');
    dispatch(getMovieDetailAction());
    const res = await getMovieDetail(movieId);
    if (res.status == 'success') dispatch(getMovieDetailSuccessAction(res));
  };

  return {
    discoveryMovies: movies.discoveryMovies,
    onGetDiscoveryMovies,
    onRefreshDiscoveryMovies,
    searchMovies: movies.searchMovies,
    onGetNextPageDiscoveryMovies,
    query: movies.query,
    onSearchMovies,
    onGetMovieDetail,
    selectedMovie: movies.selectedMovie,
    fetching: movies.isFetching,
  };
};

export default useMoviesViewModel;
