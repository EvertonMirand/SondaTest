import React, { useEffect, useState } from 'react';

import { Container, Text, LastWord } from './styles';
import { removeLastWord, getLastWord } from '../../utils/StringUtils';

interface LoginTextFieldInfoProps {
  children: string;
}

const LoginTextFieldInfo = ({
  children,
}: LoginTextFieldInfoProps): JSX.Element => {
  const [textWithoutLastWord, setTextWithoutLastWord] = useState('');
  const [lastWord, setLastWord] = useState('');

  useEffect(() => {
    setTextWithoutLastWord(removeLastWord(children));
    setLastWord(getLastWord(children));
  }, [children]);

  return (
    <Container>
      <Text>{textWithoutLastWord}</Text>
      <LastWord>{lastWord}</LastWord>
    </Container>
  );
};

export default LoginTextFieldInfo;
