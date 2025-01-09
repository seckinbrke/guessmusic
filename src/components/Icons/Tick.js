import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgTick = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 19"
    {...props}>
    <Path
      fill="currentColor"
      fillRule="evenodd"
      d="M.969 3.185C.333 4.433.333 6.066.333 9.333s0 4.9.636 6.149a5.83 5.83 0 0 0 2.55 2.549c1.247.636 2.88.636 6.147.636h4.667c3.267 0 4.9 0 6.148-.636a5.83 5.83 0 0 0 2.55-2.55c.635-1.247.635-2.88.635-6.148s0-4.9-.636-6.148a5.83 5.83 0 0 0-2.549-2.55C19.233 0 17.6 0 14.333 0H9.666C6.4 0 4.766 0 3.518.636a5.83 5.83 0 0 0-2.55 2.55m14.6 4.398a.875.875 0 0 0-1.305-1.166l-3.514 3.936-1.014-1.136a.875.875 0 0 0-1.306 1.166l1.667 1.866a.875.875 0 0 0 1.305 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTick;
