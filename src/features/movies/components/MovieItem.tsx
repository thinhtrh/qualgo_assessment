import { AppImage, AppText, AppTouchable } from '@shared/components';
import { Colors, Metrics } from '@shared/theme';
import React, { memo, useCallback, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { IMovieData } from '../models';
import { useMoviesViewModel } from '../view_model';

export type MovieItemTypes = 'strength' | 'contain';
export interface MovieItemProps {
  movie: IMovieData;
  onPress?: () => void;
  type?: MovieItemTypes;
}

export const MOVIE_ITEM_W = (Metrics.screenWidth - Metrics.spaceL * 2 - Metrics.spaceM) / 2;
export const MOVIE_ITEM_H = MOVIE_ITEM_W * 1.2;

const MovieItem = ({ movie, onPress, type }: MovieItemProps) => {
  const { onGetMovieDetail } = useMoviesViewModel();

  const onMoviePress = useCallback(() => {
    onGetMovieDetail(movie.id);
  }, [movie, onGetMovieDetail]);

  const renderMovie = useMemo(() => {
    switch (type) {
      case 'strength':
        return (
          <AppTouchable style={styles.strengthContainer} onPress={onMoviePress}>
            <AppImage src={movie.poster} style={styles.strengthContainer} mode={'cover'} />
            <View style={styles.titleStrengthContainer}></View>
            <AppText
              type={'content'}
              text={movie.title || movie.originalTitle}
              style={styles.titleStrengthLabel}
              numOfLines={2}
            />
          </AppTouchable>
        );
      case 'contain':
      default:
        return (
          <AppTouchable style={styles.containContainer} onPress={onMoviePress}>
            <AppImage src={movie.poster} style={styles.containImage} mode={'cover'} />

            <AppText
              type={'content'}
              text={movie.title || movie.originalTitle}
              style={styles.titleContainLabel}
              numOfLines={2}
            />
          </AppTouchable>
        );
    }
  }, [movie, type]);

  return renderMovie;
};

MovieItem.defaultProps = {
  movie: null,
  onPress: null,
  type: 'strength',
};

const styles = StyleSheet.create({
  strengthContainer: {
    width: MOVIE_ITEM_W,
    height: MOVIE_ITEM_H,
    borderRadius: Metrics.spaceM,
  },
  strengthImageeContainer: {
    borderRadius: Metrics.spaceM,
  },
  titleStrengthContainer: {
    position: 'absolute',
    backgroundColor: Colors.black,
    bottom: 0,
    left: 0,
    opacity: 0.4,
    width: MOVIE_ITEM_W,
    padding: Metrics.spaceS,
    height: 40,
    borderBottomRightRadius: Metrics.spaceM,
    borderBottomLeftRadius: Metrics.spaceM,
  },
  titleStrengthLabel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: MOVIE_ITEM_W,
    padding: Metrics.spaceS,
    height: 40,
    fontWeight: '600',
  },
  containContainer: {
    width: MOVIE_ITEM_W,
    borderRadius: Metrics.spaceM,
  },
  containImage: {
    width: MOVIE_ITEM_W,
    height: MOVIE_ITEM_W,
    borderRadius: Metrics.spaceM,
  },
  titleContainLabel: {
    width: MOVIE_ITEM_W,
    padding: Metrics.spaceS,
    height: 40,
    fontWeight: '600',
    color: Colors.white,
  },
});

export default memo(MovieItem);
