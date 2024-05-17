import { AppContainer } from '@shared/components';
import React, { memo } from 'react';

import { useEffect } from 'react';
import { MovieList, NoMovie } from '../components';
import { useMoviesViewModel } from '../view_model';

const HomeMovieScreen = (): JSX.Element => {
  const {
    discoveryMovies,
    onGetDiscoveryMovies,
    onRefreshDiscoveryMovies,
    onGetNextPageDiscoveryMovies,
    fetching,
  } = useMoviesViewModel();

  useEffect(() => {
    onGetDiscoveryMovies(1);
  }, []);

  return (
    <AppContainer loading={fetching}>
      <NoMovie show={!fetching && discoveryMovies.length == 0} />
      <MovieList
        data={discoveryMovies}
        onRefresh={onRefreshDiscoveryMovies}
        onLoadMore={onGetNextPageDiscoveryMovies}
      />
    </AppContainer>
  );
};

export default memo(HomeMovieScreen);
