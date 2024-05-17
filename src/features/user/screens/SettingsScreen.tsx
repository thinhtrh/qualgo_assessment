import { AppContainer, AppText } from '@shared/components';
import { Colors, Metrics } from '@shared/theme';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';

const SettingsScreen = () => {
  return (
    <AppContainer style={styles.container}>
      <AppText text={'This Feature is under development'} style={styles.developing} />
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    // alignItems: 'center',
  },
  developing: {
    color: Colors.black,
    padding: Metrics.spaceL,
  },
});

export default memo(SettingsScreen);
