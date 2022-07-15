import styled from 'styled-components';
import { Text } from 'react-native';

interface TextProps {
  bold: boolean;
  fontSize: number;
  lineHeight: number;
  color: string;
  mr: number;
  ml: number;
  mt: number;
  mb: number;
}

export const StyledText = styled(Text)<TextProps>`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  margin-right: ${({ mr }) => mr}px;
  margin-left: ${({ ml }) => ml}px;
  margin-top: ${({ mt }) => mt}px;
  margin-bottom: ${({ mb }) => mb}px;
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: ${({ lineHeight }) => lineHeight + 5}px;
`;
