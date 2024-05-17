import { Colors } from '@shared/theme';
import React, { memo, useMemo } from 'react';
import { ColorValue, StyleSheet } from 'react-native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export type IconType = 'MaterialCommunity' | 'FontAwesome'; //TODO add more later
interface AppIconProps {
  icon?: string;
  size?: number;
  color?: ColorValue;
  type?: IconType;
}
const AppIcon = ({ icon, size, color, type }: AppIconProps): JSX.Element => {
  const renderIcon = useMemo(() => {
    switch (type) {
      case 'FontAwesome':
        return <FontAwesomeIcons name={icon} color={color} size={size} />;
      case 'MaterialCommunity':
      default:
        return <MaterialCommunityIcons name={icon} color={color} size={size} />;
    }
  }, []);
  return renderIcon;
};

AppIcon.defaultProps = {
  icon: 'home',
  size: 32,
  color: Colors.white,
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    type: 'MaterialCommunity',
  },
});

export default memo(AppIcon);
