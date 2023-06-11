import React from 'react';
import FastImage, {FastImageProps} from 'react-native-fast-image';

interface Props extends FastImageProps {
  className?: string;
  style?: any;
  assets?: number;
  uri?: string;
  priority?: 'low' | 'normal' | 'high';
}

const Image = ({style, assets, uri, priority = 'normal', ...rest}: Props) => {
  return (
    <FastImage
      style={style}
      source={
        assets || {
          uri,
          priority,
        }
      }
      {...rest}
    />
  );
};

export default Image;
