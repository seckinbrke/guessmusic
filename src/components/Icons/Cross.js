import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgCross = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 10 10"
    {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M5 9.375a4.375 4.375 0 1 1 0-8.75 4.375 4.375 0 0 1 0 8.75M5 0a5 5 0 0 0-5 5 5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5m1.787 3.213a.317.317 0 0 0-.446 0L4.998 4.556 3.674 3.231a.313.313 0 1 0-.441.444l1.323 1.322L3.223 6.33a.317.317 0 0 0 0 .447.317.317 0 0 0 .446 0l1.333-1.334 1.324 1.325a.313.313 0 1 0 .442-.444L5.444 5.003 6.787 3.66a.317.317 0 0 0 0-.446"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCross;
