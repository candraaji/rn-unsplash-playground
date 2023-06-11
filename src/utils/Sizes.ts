import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const percentHeight = height / 100;
const percentWidth = width / 100;

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

export const BOTTOM_TAB_HEIGHT = 60;

export const sizeWidth = (percent: number) => {
  return (
    percent * (percentWidth < percentHeight ? percentWidth : percentHeight)
  );
};

export const sizeHeight = (percent: number) => {
  return (
    percent * (percentWidth > percentHeight ? percentWidth : percentHeight)
  );
};

export const sizeFont = (percent: number) => {
  return (
    percent * (percentWidth < percentHeight ? percentWidth : percentHeight)
  );
};

export const paddingTopTranslucent = (size: number) => {
  return Platform.OS === 'ios' ? size + 24 : size;
};
