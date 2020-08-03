import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';

import { version } from '../../../package.json';

import { Container, Header, Text, ButtonContainer, Icon } from './styles';
import { LOGIN } from '../../routes/RoutesContants';

const MoreOptions: React.FC = () => {
  const navigation = useNavigation();

  const onPressExit = useCallback(() => {
    navigation.navigate(LOGIN);
  }, [navigation]);

  return (
    <Container>
      <Header>
        <Text>Teste Técnico CTIS</Text>
        <Text>{`Versão 1.0.2 (${version} build)`}</Text>
      </Header>
      <ButtonContainer onPress={onPressExit}>
        <Icon name="sign-out" />
        <Text>Sair</Text>
      </ButtonContainer>
    </Container>
  );
};

export default MoreOptions;
