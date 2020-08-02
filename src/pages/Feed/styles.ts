import styled, { css } from 'styled-components/native';
import { BACKGROUND } from '../../utils/Colors';

interface ContainerProps {
  isLoading: boolean;
}

export const Container = styled.SafeAreaView<ContainerProps>`
  flex: 1;
  background-color: ${BACKGROUND};

  ${({ isLoading }) =>
    isLoading &&
    css`
      justify-content: center;
      align-items: center;
    `}
`;

export const Thumbnail = styled.Image`
  flex: 1;
`;
