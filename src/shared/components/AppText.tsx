import { Colors, FontSize } from '@shared/theme';
import React, { memo, useMemo } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

interface AppTextProps {
  text?: string | number;
  style?: TextStyle;
  type?: TextType;
  numOfLines?: number;
}

export type TextType = 'title' | 'content' | 'medium';
const AppText = ({ text, type, style, numOfLines }: AppTextProps): JSX.Element => {
  const fontStyle = useMemo(() => {
    switch (type) {
      case 'title':
        return styles.titleStyle;
      case 'content':
        return styles.contentStyle;
      case 'medium':
      default:
        return styles.normalStyle;
    }
  }, [type]);

  return (
    <Text style={[fontStyle, style]} numberOfLines={numOfLines}>
      {text}
    </Text>
  );
};

AppText.defaultProps = {
  text: '',
  type: 'content',
  numOfLines: null,
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
  },
  titleStyle: {
    fontSize: FontSize.title,
    color: Colors.white,
    fontWeight: 'bold',
  },
  contentStyle: {
    fontSize: FontSize.content,
    color: Colors.white,
  },
  normalStyle: {
    fontSize: FontSize.medium,
    color: Colors.white,
  },
});

export default memo(AppText);
