import { Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window');

Dimensions.addEventListener('change', () => {
  const { height: eventHeight, width: eventWidth } = Dimensions.get('window');
  height = eventHeight;
  width = eventWidth;
});

const screenPercentage = (percentage = 10): number => {
  return height * (percentage / 100);
};

const screenWidthPercentage = (percentage = 10): number => {
  return width * (percentage / 100);
};

export { screenPercentage, screenWidthPercentage };
