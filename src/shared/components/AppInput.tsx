import { Colors, FontSize, Metrics } from '@shared/theme';
import React, { memo } from 'react';
import { StyleSheet, TextInput, ViewStyle } from 'react-native';

interface AppInputProps {
  value?: string;
  placeHolder?: string;
  onTextChange?: (value: string) => void;
  style?: ViewStyle;
  autoFocus?: boolean;
}

export const AppInput = ({
  value,
  placeHolder,
  onTextChange,
  style,
  autoFocus,
}: AppInputProps): JSX.Element => {
  return (
    <TextInput
      value={value}
      autoFocus={autoFocus}
      placeholder={placeHolder}
      onChangeText={onTextChange}
      style={[styles.container, style]}
      underlineColorAndroid={'transparent'}
      autoCorrect={false}
      autoComplete={'off'}
    />
  );
};

AppInput.defaultProps = {
  value: '',
  placeHolder: '',
  onTextChange: null,
  autoFocus: false,
  style: null,
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Metrics.spaceM,
    height: 40,
    backgroundColor: Colors.white,
    borderRadius: Metrics.spaceM,
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

export default memo(AppInput);
