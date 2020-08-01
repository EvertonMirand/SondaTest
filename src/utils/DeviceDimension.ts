import { Dimensions } from 'react-native';

class DeviceDimension {
  height = 100;

  width = 100;

  static instance: DeviceDimension =
    DeviceDimension.instance || new DeviceDimension();

  private constructor() {
    this.changeSizes();
    Dimensions.addEventListener('change', this.changeSizes);
  }

  private changeSizes(): void {
    const { height, width } = Dimensions.get('window');
    this.height = height;
    this.width = width;
  }

  screenPercentage = (percentage = 10): number => {
    return this.height * (percentage / 100);
  };

  isLandscape = () => this.width > this.height;
}

export default DeviceDimension.instance;
