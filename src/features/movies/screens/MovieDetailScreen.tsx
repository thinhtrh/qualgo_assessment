import { AppContainer, AppIcon, AppTouchable } from '@shared/components';
import { back } from '@shared/services/navigations';
import { Colors, Metrics } from '@shared/theme';
import React, { memo, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MovieDetail } from '../components';
import { useMoviesViewModel } from '../view_model';

const MovieDetailScreen = () => {
  const { selectedMovie, fetching } = useMoviesViewModel();
  const { top } = useSafeAreaInsets();

  const renderContent = useMemo(() => {
    return selectedMovie ? <MovieDetail movie={selectedMovie} /> : <></>;
  }, [selectedMovie]);

  return (
    <AppContainer style={{ paddingTop: top }} loading={fetching}>
      {renderContent}
      <AppTouchable
        onPress={back}
        style={{ position: 'absolute', top: top, right: Metrics.spaceM }}
      >
        <AppIcon icon="close-circle" color={Colors.white} />
      </AppTouchable>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: Colors.black, flex: 1 },
  closeView: {},
});

export default memo(MovieDetailScreen);
