import React, { useRef, useCallback, useState } from 'react';

import { RNCamera } from 'react-native-camera';

import { TouchableOpacity, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  BottomButtons,
  TopButtons,
  TakePictureButton,
  PictureButtonCircle,
  ButtonContainer,
  Cam,
  ButtonText,
  BottomTexContainer,
} from './styles';
import { CAMERA_PRIMARY } from '../../utils/Colors';
import { getNextPosition } from '../../utils/ArrayUtils';
import FAIconButton from '../../components/FAIconButton';
import { CameraTypes, FlashModes } from '../../utils/CameraConstants';

const Camera: React.FC = () => {
  const [cameraTypePosition, setCameraTypePosition] = useState(0);
  const [flashModePosition, setFlashModePosition] = useState(0);
  const camRef = useRef<RNCamera>(null);
  const navigation = useNavigation();

  const onChangeCameraType = useCallback(
    () =>
      setCameraTypePosition(getNextPosition(cameraTypePosition, CameraTypes)),
    [cameraTypePosition]
  );

  const onChangeFlashModePosition = useCallback(
    () => setFlashModePosition(getNextPosition(flashModePosition, FlashModes)),
    [flashModePosition]
  );

  const onCancel = useCallback(navigation.goBack, [navigation]);

  const onTakePicture = useCallback(() => {
    camRef?.current
      ?.takePictureAsync()
      .then(() => {
        Alert.alert('Foto tirada.', 'A foto foi tirada com sucesso.');
        navigation.goBack();
      })
      .catch(() => {
        Alert.alert('Erro ao tirar foto.', 'Ocorreu um erro ao tirar a foto.');
      });
  }, [navigation]);

  return (
    <Container>
      <TopButtons>
        <FAIconButton
          onPress={onChangeFlashModePosition}
          color={CAMERA_PRIMARY}
          iconName="flash"
        />

        <FAIconButton
          onPress={onChangeCameraType}
          color={CAMERA_PRIMARY}
          iconName="camera"
        />
      </TopButtons>
      <Cam
        ref={camRef}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: 'Permissão para utilizar a camera.',
          message: 'Nós precisamos da sua precisão para utilizar a camera.',
          buttonPositive: 'Permitir',
          buttonNegative: 'Cancelar',
        }}
        type={CameraTypes[cameraTypePosition]}
        flashMode={FlashModes[flashModePosition]}
      />
      <BottomTexContainer>
        <ButtonText>Photo</ButtonText>
      </BottomTexContainer>
      <BottomButtons>
        <ButtonContainer>
          <TouchableOpacity onPress={onCancel}>
            <ButtonText>Cancelar</ButtonText>
          </TouchableOpacity>
        </ButtonContainer>
        <ButtonContainer>
          <TakePictureButton onPress={onTakePicture}>
            <PictureButtonCircle />
          </TakePictureButton>
        </ButtonContainer>
        <ButtonContainer>
          <View />
        </ButtonContainer>
      </BottomButtons>
    </Container>
  );
};

export default Camera;
