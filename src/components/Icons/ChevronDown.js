import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgChevronDown = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 8 5"
    {...props}>
    <Path
      fill="currentColor"
      d="M.853.855a.5.5 0 0 0 0 .707L3.3 4.006a1 1 0 0 0 1.413 0L7.16 1.56a.5.5 0 1 0-.707-.708L4.359 2.946a.5.5 0 0 1-.707 0L1.56.856a.5.5 0 0 0-.708 0"
    />
  </Svg>
);
export default SvgChevronDown;
