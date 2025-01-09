import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgAddInvoice = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 32 30"
    {...props}>
    <Path
      fill="currentColor"
      d="M1 10.296C1 2.641 2.562 1 9.852 1h2.695c1.115 0 2.155.585 2.773 1.559l1.355 2.132c.618.974 1.658 1.559 2.773 1.559h8.424c1.758 0 3.144 1.437 3.128 3.283-.003.311-.005.578-.005.763v9.408c0 7.655-1.562 9.296-8.852 9.296H9.852C2.562 29 1 27.36 1 19.704z"
      opacity={0.1}
    />
    <Path
      stroke="currentColor"
      strokeWidth={2}
      d="M1 10.296C1 2.641 2.562 1 9.852 1h2.695c1.115 0 2.155.585 2.773 1.559l1.355 2.132c.618.974 1.658 1.559 2.773 1.559h8.424c1.758 0 3.144 1.437 3.128 3.283-.003.311-.005.578-.005.763v9.408c0 7.655-1.562 9.296-8.852 9.296H9.852C2.562 29 1 27.36 1 19.704z"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.998 13.25V22M20.164 17.625h-8.332"
    />
  </Svg>
);
export default SvgAddInvoice;
