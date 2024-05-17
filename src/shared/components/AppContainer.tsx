import { Colors, Metrics } from '@shared/theme';
import React, { memo, PropsWithChildren } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import AppLoading from './AppLoading';

interface AppConntainerProps extends PropsWithChildren {
  loading?: boolean;
  style?: ViewStyle;
}
const AppConntainer = (props: PropsWithChildren<AppConntainerProps>): JSX.Element => {
  const { loading, children, style } = props;
  return (
    <View style={[styles.container, style]}>
      {loading && (
        <View style={styles.loadingBackgroud}>
          <AppLoading show={loading} style={styles.loading} />
        </View>
      )}
      {children}
    </View>
  );
};

AppConntainer.defaultProps = {
  loading: false,
  style: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  loadingBackgroud: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    position: 'absolute',
    opacity: 0.5,
  },
  loading: {
    marginTop: 150,
  },
});

export default memo(AppConntainer);
