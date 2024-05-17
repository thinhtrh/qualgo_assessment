import { AppIcon, AppImage, AppText } from '@shared/components';
import { Colors, FontSize, Metrics } from '@shared/theme';
import { convertRuntimeToHour, covertDateStringToYear } from '@shared/utils';
import React, { memo, useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { IMovieDetail } from '../models';

interface MovieDetailProps {
  movie: IMovieDetail;
}

const MovieDetail = ({ movie }: MovieDetailProps): JSX.Element => {
  const releaseYear = useMemo(() => {
    return covertDateStringToYear(movie.release);
  }, [movie.release]);

  const runtime = useMemo(() => {
    return convertRuntimeToHour(movie.runtime);
  }, [movie.runtime]);

  const cast = useMemo(() => {
    if (movie.cast?.length < 1) return '';
    return (
      'Cast : ' +
      movie.cast
        .map((c) => {
          return c.name;
        })
        .join(', ')
    );
  }, [movie.cast]);

  const keywords = useMemo(() => {
    if (movie.keywords?.length < 1) return '';
    return (
      'Keywords : ' +
      movie.keywords
        .map((c) => {
          return c.name;
        })
        .join(', ')
    );
  }, [movie.keywords]);

  return (
    <ScrollView>
      <AppImage src={movie.backdrop || movie.poster} style={styles.image} mode={'cover'} />
      <View style={styles.content}>
        <AppText text={movie.title} type="title" />
        <View style={styles.timeView}>
          <AppIcon icon="calendar" size={24} />
          <AppText text={releaseYear} type="medium" style={styles.timeLabel} />
          <AppIcon icon="timer-outline" size={24} />
          <AppText text={runtime} type="medium" style={styles.timeLabel} />
        </View>
        <AppText text={movie.overview} />
        <AppText text={cast} style={styles.cast} />
        <AppText text={keywords} style={styles.cast} />
      </View>
    </ScrollView>
  );
};

MovieDetail.defaultProps = {
  movie: null,
};

const styles = StyleSheet.create({
  image: { width: Metrics.screenWidth, height: (Metrics.screenWidth * 2) / 3 },
  content: { padding: Metrics.spaceM },
  timeView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Metrics.spaceL,
  },
  timeLabel: {
    marginLeft: Metrics.spaceS,
    marginRight: Metrics.spaceL,
  },
  closeView: {},
  cast: {
    color: Colors.lightBlack,
    fontSize: FontSize.small,
    marginTop: Metrics.spaceL,
  },
});

export default memo(MovieDetail);
