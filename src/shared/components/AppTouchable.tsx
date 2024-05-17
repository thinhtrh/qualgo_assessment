import React, { memo, PropsWithChildren } from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

interface AppTouchableProps extends PropsWithChildren {
  disabled?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}
const AppTouchable = (props: PropsWithChildren<AppTouchableProps>): JSX.Element => {
  const { disabled, onPress, children, style } = props;
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.container, style]}>
      {children}
    </TouchableOpacity>
  );
};

AppTouchable.defaultProps = {
  child: null,
  disabled: false,
  onPress: null,
  style: null,
};

const styles = StyleSheet.create({
  container: {
    // padding: Metrics.spaceS,
  },
});

export default memo(AppTouchable);
