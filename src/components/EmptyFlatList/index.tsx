import React, { memo } from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

interface EmptyFlatListProps {
  children: string;
}

const EmptyFlatList = ({ children }: EmptyFlatListProps): JSX.Element => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};

export default memo(EmptyFlatList);
