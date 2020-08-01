import React, { useState, useEffect, useCallback } from 'react';

import { useForm } from 'react-hook-form';

import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Logo,
  LoginButton,
  LogoCard,
  LoginButtonText,
  Form,
  ErrorText,
} from './styles';
import TextField from '../../components/TextField';
import LoginTextFieldInfo from '../../components/LoginTextFieldInfo';
import DeviceDimension from '../../utils/DeviceDimension';
import { EMAIL } from '../../utils/Regex';
import LoginTextField from '../../components/LoginTextField';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [isLandscape, setIsLandscape] = useState(DeviceDimension.isLandscape());
  const { register, handleSubmit, setValue, errors } = useForm<LoginFormData>();

  const navigation = useNavigation();

  const onSubmit = ({ password }: LoginFormData) => {
    if (password === '111111') {
    }
  };

  useEffect(() => {
    register(
      { name: 'email' },
      {
        required: 'Digite um email.',
        pattern: {
          value: EMAIL,
          message: 'Digite um email valido.',
        },
      }
    );
    register(
      { name: 'password' },
      {
        required: 'Digite uma senha.',

        minLength: {
          value: 6,
          message: 'A senha deve ser maior que 6 digitos',
        },
      }
    );
  }, [register]);

  useEffect(() => {
    Dimensions.addEventListener('change', () => setIsLandscape(!isLandscape));
  }, [isLandscape]);

  const onChangeEmail = useCallback(
    (value: string): void => setValue('email', value, { shouldValidate: true }),
    [setValue]
  );

  const onChangePassword = useCallback(
    (value: string): void =>
      setValue('password', value, { shouldValidate: true }),
    [setValue]
  );

  return (
    <>
      <Container>
        {!isLandscape && (
          <LogoCard>
            <Logo />
          </LogoCard>
        )}
        <Form>
          <LoginTextField
            placeholder="Email"
            onChangeText={onChangeEmail}
            infoText="Para acessar o app informe seu email"
            errorMessage={errors?.email?.message}
          />

          <LoginTextField
            placeholder="Senha"
            textContentType="password"
            onChangeText={onChangePassword}
            secureTextEntry
            infoText="Agora digite sua senha"
            errorMessage={errors?.password?.message}
          />
        </Form>
      </Container>
      <LoginButton onPress={handleSubmit(onSubmit)}>
        <LoginButtonText>ACESSAR</LoginButtonText>
      </LoginButton>
    </>
  );
};

export default Login;
