import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgBag = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      fill="currentColor"
      d="M16.667 22.5c2.2 0 4.467 0 5.15-.684.683-.683.683-1.783.683-3.983v-7c0-2.2 0-3.3-.683-3.983s-2.95-.683-5.15-.683zM7.333 22.5V6.167c-2.2 0-4.466 0-5.15.683-.683.683-.683 1.783-.683 3.983v7c0 2.2 0 3.3.683 3.983.684.684 2.95.684 5.15.684"
      opacity={0.1}
    />
    <Path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.333 22.5V3.833A2.333 2.333 0 0 1 9.666 1.5h4.667a2.333 2.333 0 0 1 2.333 2.333V22.5"
    />
    <Path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1.5 10.833c0-2.2 0-3.3.683-3.983.684-.683 1.784-.683 3.984-.683h11.666c2.2 0 3.3 0 3.984.683.683.683.683 1.783.683 3.983v7c0 2.2 0 3.3-.683 3.983-.684.684-1.784.684-3.984.684H6.167c-2.2 0-3.3 0-3.984-.684-.683-.683-.683-1.783-.683-3.983z"
    />
  </Svg>
);
export default SvgBag;
