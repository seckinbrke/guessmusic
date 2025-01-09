import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgPencil = props => (
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
      d="M5 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5M9.387 3.05c.805-.808.77-1.87.17-2.52A1.66 1.66 0 0 0 8.374 0C7.9-.01 7.408.17 6.955.55l-.033.03L.437 7.09A1.5 1.5 0 0 0 0 8.15v.846C0 9.546.446 10 1.002 10h.84a1.5 1.5 0 0 0 1.062-.441zM7.604 1.896a.5.5 0 1 0-.708.708l.5.5a.5.5 0 1 0 .708-.708z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPencil;
