import { RNCamera } from 'react-native-camera';

const { back, front } = RNCamera.Constants.Type;
const { auto, off, on, torch } = RNCamera.Constants.FlashMode;

const CameraTypes = [back, front];

const FlashModes = [auto, off, on, torch];

export { CameraTypes, FlashModes };
