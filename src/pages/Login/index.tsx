import React, { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import Orientation from 'react-native-orientation';
import { ActivityIndicator, Alert, KeyboardAvoidingView } from 'react-native';
import { Formik, FormikHelpers } from 'formik';

import * as Yup from 'yup';

import {
  Container,
  Logo,
  LoginButton,
  LogoCard,
  LoginButtonText,
  Form,
} from './styles';

import LoginTextField from '../../components/LoginTextField';
import { TAB_ROUTES, FEED } from '../../routes/RoutesContants';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Email invalido.').required('Email nescessario.'),
  password: Yup.string().min(6, 'A senha deve ser maior que 6 caracteres.'),
});

interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const loginSuccess = (): void => {
    navigation.navigate(TAB_ROUTES, {
      screen: FEED,
    });
  };

  const loginFail = (): void => {
    Alert.alert('Login invalido!', 'Usuario ou senha não cadastrado.');
  };

  const login = (password: string, successCallback: () => void): void => {
    if (password === '111111') {
      successCallback();
      loginSuccess();
    } else {
      loginFail();
    }

    setIsLoading(false);
  };

  const onSubmit = (
    { password }: LoginFormData,
    { resetForm }: FormikHelpers<LoginFormData>
  ): void => {
    setIsLoading(true);
    setTimeout(() => {
      login(password, () => resetForm({}));
    }, 1000);
  };

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ email: '', password: '' }}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleSubmit,
        values: { email, password },
        errors,
      }) => (
        <>
          <Container>
            <LogoCard>
              <Logo />
            </LogoCard>
            <KeyboardAvoidingView>
              <Form>
                <LoginTextField
                  placeholder="Email"
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  value={email}
                  infoText="Para acessar o app informe seu email"
                  errorMessage={errors?.email}
                />

                <LoginTextField
                  placeholder="Senha"
                  textContentType="password"
                  onChangeText={handleChange('password')}
                  value={password}
                  secureTextEntry
                  infoText="Agora digite sua senha"
                  errorMessage={errors?.password}
                />
              </Form>
            </KeyboardAvoidingView>
          </Container>
          <LoginButton onPress={handleSubmit} disabled={isLoading}>
            {!isLoading ? (
              <LoginButtonText>ACESSAR</LoginButtonText>
            ) : (
              <ActivityIndicator color="#fff" />
            )}
          </LoginButton>
        </>
      )}
    </Formik>
  );
};

export default Login;
