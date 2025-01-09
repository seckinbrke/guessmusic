import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgSend = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 22 20"
    {...props}>
    <Path
      stroke="#1D2125"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.417 10H3.322m-.201.93-1.172 3.502c-.643 1.917-.964 2.876-.733 3.467.2.513.63.901 1.16 1.05.61.17 1.532-.245 3.377-1.075l11.823-5.32c1.8-.81 2.7-1.216 2.979-1.779a1.75 1.75 0 0 0 0-1.55c-.279-.563-1.179-.968-2.979-1.779L5.732 2.116C3.894 1.29 2.974.877 2.364 1.047a1.75 1.75 0 0 0-1.16 1.046c-.23.59.087 1.547.722 3.46L3.123 9.16c.11.329.164.493.185.661q.03.225 0 .45c-.022.167-.077.332-.187.66"
    />
  </Svg>
);
export default SvgSend;
