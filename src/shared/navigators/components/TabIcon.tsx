import { AppIcon, AppText } from '@shared/components';
import { FontSize } from '@shared/theme';
import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { ColorValue } from 'react-native/types';
interface TabIconProps {
  name: string;
  color: ColorValue;
  label: string;
}

const TabIcon = ({ name, color, label }: TabIconProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <AppIcon icon={name} color={color} size={32} />
      <AppText text={label} style={{ color, fontSize: FontSize.small }} />
    </View>
  );
};

TabIcon.defaultProps = {
  name: 'home',
  color: 'white',
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(TabIcon);
