import { Colors, FontSize, Metrics } from '@shared/theme';
import React, { memo, ReactElement, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppIcon, { IconType } from './AppIcon';
import AppText from './AppText';
import AppTouchable from './AppTouchable';

interface AppHeaderProps {
  leftIcon?: string;
  headerComponent?: ReactElement;
  headerTitle?: string;
  rightIcon?: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  rightIconType?: IconType;
}

const AppHeader = ({
  leftIcon,
  headerComponent,
  headerTitle,
  rightIcon,
  rightIconType,
  onLeftPress,
  onRightPress,
}: AppHeaderProps): JSX.Element => {
  const { top } = useSafeAreaInsets();
  const renderLeft = useMemo(() => {
    return leftIcon ? (
      <AppTouchable disabled={onLeftPress == null} onPress={onLeftPress}>
        <AppIcon icon={leftIcon} />
      </AppTouchable>
    ) : null;
  }, [leftIcon, onLeftPress]);

  const renderCenter = useMemo(() => {
    return headerComponent ? (
      headerComponent
    ) : headerTitle ? (
      <AppText text={headerTitle} type={'title'} />
    ) : null;
  }, [headerTitle, headerComponent]);

  const renderRight = useMemo(() => {
    return rightIcon ? (
      <AppTouchable disabled={onRightPress == null} onPress={onRightPress}>
        <AppIcon icon={rightIcon} type={rightIconType} />
      </AppTouchable>
    ) : null;
  }, [rightIcon, onRightPress]);

  return (
    <View style={[styles.container, { paddingTop: top + Metrics.spaceM }]}>
      {renderLeft}
      {renderCenter}
      {renderRight}
    </View>
  );
};

AppHeader.defaultProps = {
  flex: 1,
  leftIcon: 'chevron-left',
  headerTitle: 'title',
  rightIcon: null,
  onLeftPress: null,
  onRightPress: null,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: Metrics.spaceL,
    paddingBottom: Metrics.spaceL,
    // borderBottomColor: Colors.lightBlack,
    // borderBottomWidth: 1,
    // height: 70,
  },
  titleStyle: {
    fontSize: FontSize.title,
    color: Colors.primary,
  },
  contentStyle: {
    fontSize: FontSize.content,
    color: Colors.secondary,
  },
  normalStyle: {
    fontSize: FontSize.medium,
    color: Colors.lightBlue,
  },
});

export default memo(AppHeader);
