import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const PersonalIcon = () => (
  <Svg width={17} height={18} fill="none" viewBox="0 0 24 24">
    <Path
      d="M13.625 5a3.125 3.125 0 1 1-6.25 0 3.125 3.125 0 0 1 6.25 0ZM4.251 16.765a6.25 6.25 0 0 1 12.498 0 14.944 14.944 0 0 1-6.249 1.36c-2.23 0-4.347-.487-6.249-1.36Z"
      stroke="#2F3941"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default PersonalIcon;
