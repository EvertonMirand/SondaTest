import styled from 'styled-components/native';

import { TextFieldProps } from './index';

const getColor = ({ color }: TextFieldProps): string => color;

interface FieldProps {
  active: boolean;
  color: string;
}

export const Field = styled.TextInput<FieldProps>`
  border-bottom-width: ${({ active }) => (active ? 2 : 0.5)}px;
  border-bottom-color: ${getColor};
  height: 40px;
`;

export const ActivePlaceholderText = styled.Text`
  color: ${getColor};

  font-size: 12px;
`;
