import styled from 'styled-components/native';

import logo from '../../assets/logo.jpg';

import { BUTTON, BUTTON_TEXT, ERROR_TEXT, BORDER } from '../../utils/Colors';
import { screenPercentage } from '../../utils/DeviceDimension';

export const Container = styled.ScrollView`
  flex: 1;
  flex-grow: 1;
  min-height: ${screenPercentage(120)}px;
`;

export const LogoCard = styled.View`
  height: ${screenPercentage(20)}px;
  justify-content: center;

  align-items: center;

  border-bottom-width: 1px;
  border-bottom-color: ${BORDER};
`;

export const Form = styled.View`
  flex: 1;
  margin: 20px;
  margin-top: 50px;
`;

export const Logo = styled.Image.attrs({ source: logo, resizeMode: 'contain' })`
  height: 50%;
`;

export const LoginButton = styled.TouchableOpacity`
  z-index: 5;
  height: ${screenPercentage(10)}px;

  justify-content: center;
  align-items: center;
  background-color: ${BUTTON};
  bottom: 0;
  position: absolute;
  width: 100%;
`;

export const LoginButtonText = styled.Text`
  color: ${BUTTON_TEXT};
`;

export const ErrorText = styled.Text`
  color: ${ERROR_TEXT};
  margin-top: 5px;
`;
