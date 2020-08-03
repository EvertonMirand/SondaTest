import styled from 'styled-components/native';

import { RNCamera } from 'react-native-camera';

import { CAMERA_BACKGROUND, CAMERA_PRIMARY } from '../../utils/Colors';

export const TopButtons = styled.View`
  height: 50px;
  width: 100%;
  background-color: ${CAMERA_BACKGROUND};
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
`;

export const Cam = styled(RNCamera)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${CAMERA_BACKGROUND};
`;

export const BottomButtons = styled.View`
  height: 100px;
  background-color: ${CAMERA_BACKGROUND};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
`;

const TakePictureSize = 60;

export const TakePictureButton = styled.TouchableOpacity`
  height: ${TakePictureSize}px;
  width: ${TakePictureSize}px;
  border-radius: ${TakePictureSize / 2}px;
  margin-left: 20px;
  padding: 3px;
  border-width: 5px;
  border-color: ${CAMERA_PRIMARY};
`;

export const PictureButtonCircle = styled.View`
  flex: 1;
  background-color: ${CAMERA_PRIMARY};
  border-radius: ${TakePictureSize / 2}px;
`;

export const ButtonText = styled.Text`
  color: ${CAMERA_PRIMARY};
`;

export const BottomTexContainer = styled.View`
  width: 100%;
  height: 20px;
  background-color: ${CAMERA_BACKGROUND};
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;
