import React, { memo } from 'react';

import { ErrorText, Container } from './styles';
import LoginTextFieldInfo from '../LoginTextFieldInfo';
import TextField, { TextFieldProps } from '../TextField';

interface LoginTextFieldProps extends TextFieldProps {
  infoText: string;
  errorMessage?: string;
}

const LoginTextField = (props: LoginTextFieldProps): JSX.Element => {
  const { infoText, errorMessage, style } = props;
  return (
    <Container style={style}>
      <LoginTextFieldInfo>{infoText}</LoginTextFieldInfo>

      <TextField {...props} />
      <ErrorText>{errorMessage}</ErrorText>
    </Container>
  );
};

export default memo(LoginTextField);
