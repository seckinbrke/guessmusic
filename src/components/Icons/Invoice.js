import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgInvoice = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 20 24"
    {...props}>
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.5 10.833h7m-7-4.666h4.666M6.5 15.5h7M1.833 5.233V22.5l2.917-2.333L7.666 22.5 10 20.167l2.333 2.333 2.917-2.333 2.916 2.333V5.233c0-1.306 0-1.96-.254-2.459a2.33 2.33 0 0 0-1.02-1.02C16.393 1.5 15.74 1.5 14.433 1.5H5.566c-1.306 0-1.96 0-2.459.254-.439.224-.796.581-1.02 1.02-.254.5-.254 1.153-.254 2.46"
    />
  </Svg>
);
export default SvgInvoice;
