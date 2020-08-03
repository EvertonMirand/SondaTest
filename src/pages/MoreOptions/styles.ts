import styled from 'styled-components/native';

import FAIcons from 'react-native-vector-icons/FontAwesome';

import { BACKGROUND, MORE_OPTION_DEFAULT } from '../../utils/Colors';

export const Container = styled.View`
  flex: 1;
  color: ${BACKGROUND};
`;

export const ButtonContainer = styled.TouchableOpacity`
  height: 70px;
  border-width: 1px;
  border-color: ${MORE_OPTION_DEFAULT};
  align-items: center;
  padding: 20px;
  flex-direction: row;
`;

export const Header = styled.View`
  height: 100px;
  padding: 20px;
`;

export const Icon = styled(FAIcons).attrs({
  size: 40,
  color: MORE_OPTION_DEFAULT,
})`
  margin-right: 15px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: ${MORE_OPTION_DEFAULT};
`;
