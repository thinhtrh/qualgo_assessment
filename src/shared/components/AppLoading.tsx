import { Colors } from '@shared/theme';
import React, { memo } from 'react';
import { ActivityIndicator, StyleSheet, ViewStyle } from 'react-native';

interface AppLoadingProps {
  show: boolean;
  style?: ViewStyle;
}
const AppLoading = ({ show, style }: AppLoadingProps): JSX.Element => {
  return <ActivityIndicator size={'large'} color={Colors.white} animating={show} style={style} />;
};

AppLoading.defaultProps = {
  show: false,
  style: null,
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
  },
});

export default memo(AppLoading);
