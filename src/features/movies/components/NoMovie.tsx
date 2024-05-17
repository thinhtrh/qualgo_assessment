import { AppText } from '@shared/components';
import { Metrics } from '@shared/theme';
import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

interface NoMovieProps {
  show: boolean;
}
const NoMovie = ({ show }: NoMovieProps): JSX.Element => {
  return show ? (
    <View style={styles.container}>
      <AppText text={'No movie found!'} />
    </View>
  ) : null;
};

NoMovie.defaultProps = {
  show: false,
};

const styles = StyleSheet.create({
  container: {
    padding: Metrics.spaceL,
  },
});

export default memo(NoMovie);
