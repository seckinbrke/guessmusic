import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgPlus = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 10 10"
    {...props}>
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 5h8M5 1v8"
    />
  </Svg>
);
export default SvgPlus;
