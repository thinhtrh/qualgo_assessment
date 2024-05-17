import { Metrics } from '@shared/theme';
import React, { memo, useCallback, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';
import { IMovieData } from '../models';
import MovieItem, { MovieItemTypes } from './MovieItem';

export interface MovieListProps {
  data: IMovieData[];
  onRefresh?: () => void;
  onLoadMore?: () => void;
  itemType?: MovieItemTypes;
}

const MovieList = ({ data, onRefresh, onLoadMore, itemType }: MovieListProps) => {
  const [refresh, setRefresh] = useState<boolean>(false);

  const renderMovie = useCallback(({ item }) => {
    return <MovieItem movie={item} type={itemType} />;
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={renderMovie}
      numColumns={2}
      keyExtractor={(movie) => movie.id}
      columnWrapperStyle={styles.columnWrapper}
      refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}
      onEndReachedThreshold={0.2}
      onEndReached={onLoadMore}
      showsVerticalScrollIndicator={false}
    />
  );
};

MovieList.defaultProps = {
  data: [],
};

const styles = StyleSheet.create({
  columnWrapper: {
    marginHorizontal: Metrics.spaceL,
    marginTop: Metrics.spaceM,
    justifyContent: 'space-between',
  },
});

export default memo(MovieList);
