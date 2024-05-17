import React, { memo, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import FastImage, { ImageStyle, ResizeMode, Source } from 'react-native-fast-image';

interface AppImageProps {
  src?: string | number | Source;
  mode?: ResizeMode;
  style?: ImageStyle;
}
const defaultImage =
  'https://img.freepik.com/free-vector/cinema-realistic-poster-with-illuminated-bucket-popcorn-drink-3d-glasses-reel-tickets-blue-background-with-tapes-vector-illustration_1284-77070.jpg';
const AppImage = ({ src, mode, style }: AppImageProps): JSX.Element => {
  const source: number | Source = useMemo(() => {
    if (!src) return { uri: defaultImage };
    if (typeof src === 'string') return { uri: src } as Source;
    return src;
  }, [src]);

  return <FastImage source={source} resizeMode={mode} style={[styles.container, style]} />;
};

AppImage.defaultProps = {
  src: defaultImage,
  mode: 'contain',
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
  },
});

export default memo(AppImage);
