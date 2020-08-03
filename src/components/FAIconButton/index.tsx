import React from 'react';

import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import FAIcons from 'react-native-vector-icons/FontAwesome';
import { PRIMARY_COLOR } from '../../utils/Colors';
import { Container } from './styles';

interface FAIconButtonProps extends TouchableOpacityProps {
  color: string;
  iconName: string;
  size?: number;
}

const FAIconButton = (props: FAIconButtonProps): JSX.Element => {
  const { color = PRIMARY_COLOR, iconName, size = 20 } = props;
  return (
    <Container {...props}>
      <FAIcons size={size} name={iconName} color={color} />
    </Container>
  );
};

export default FAIconButton;
