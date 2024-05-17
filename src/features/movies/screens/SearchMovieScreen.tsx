import { AppContainer, AppHeader, AppInput } from '@shared/components';
import { back } from '@shared/services/navigations';
import { Metrics } from '@shared/theme';
import React, { memo, useCallback, useEffect, useState } from 'react';

import { StyleSheet } from 'react-native';
import { MovieList, NoMovie } from '../components';
import { useMoviesViewModel } from '../view_model';

const SearchMovieScreen = (): JSX.Element => {
  const { searchMovies, onSearchMovies, query, fetching } = useMoviesViewModel();

  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    setSearchKey(query);
  }, [query]);

  useEffect(() => {
    if (searchMovies.length == 0 && (!query || query.length == 0)) onSearchMovies('');
  }, []);

  const onSearch = useCallback(
    (key: string): void => {
      setSearchKey(key);
      onSearchMovies(key);
    },
    [onSearchMovies, setSearchKey],
  );

  return (
    <AppContainer loading={fetching}>
      <AppHeader
        onLeftPress={back}
        headerComponent={
          <AppInput
            value={searchKey}
            autoFocus
            placeHolder="Search"
            onTextChange={onSearch}
            style={styles.searchInput}
          />
        }
      />
      <NoMovie show={!fetching && searchMovies.length == 0} />
      <MovieList data={searchMovies} itemType="contain" />
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  searchInput: { flex: 1, alignSelf: 'stretch', marginLeft: Metrics.spaceM },
});

export default memo(SearchMovieScreen);
