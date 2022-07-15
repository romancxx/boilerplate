import React from 'react';
import { AppColors } from '@constants/theme';
import { StyleProp, TextStyle } from 'react-native';
import { StyledText } from './Text.styled';

interface Props {
  text?: string;
  size?: number;
  bold?: boolean;
  color?: string;
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  onPress?: () => void;
}

export const Text: React.FC<Props> = ({
  text,
  size = 15,
  bold = false,
  color = AppColors.black,
  mr = 0,
  mb = 0,
  ml = 0,
  mt = 0,
  children,
  style = {},
  numberOfLines = undefined,
  onPress,
}) => {
  return (
    <StyledText
      lineHeight={size + 5}
      fontSize={size}
      style={style}
      {...{
        onPress,
        numberOfLines,
        mb,
        mr,
        ml,
        mt,
        bold,
        color,
      }}>
      {text ?? children}
    </StyledText>
  );
};
