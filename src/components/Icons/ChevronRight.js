import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgChevronRight = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 20 19"
    {...props}>
    <Path
      fill="currentColor"
      d="M8.225 14.442a.75.75 0 0 0 1.06.012l3.708-3.627a1.5 1.5 0 0 0 .024-2.12l-3.625-3.71A.75.75 0 1 0 8.32 6.045l3.102 3.175a.75.75 0 0 1-.012 1.06l-3.173 3.101a.75.75 0 0 0-.012 1.06"
    />
  </Svg>
);
export default SvgChevronRight;
