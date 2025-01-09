import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgInvoices = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 100 100"
    {...props}>
    <G filter="url(#invoices_svg__a)">
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.834 16.666a4.167 4.167 0 0 0-4.167 4.167v58.333a4.167 4.167 0 0 0 4.167 4.167h33.333a4.167 4.167 0 0 0 4.167-4.167V20.833a4.167 4.167 0 0 0-4.167-4.167zm0 75h58.333c6.904 0 12.5-5.596 12.5-12.5V37.5c0-6.904-5.596-12.5-12.5-12.5h-12.5v-4.167c0-6.903-5.596-12.5-12.5-12.5H20.834c-6.904 0-12.5 5.597-12.5 12.5v58.333c0 6.904 5.596 12.5 12.5 12.5m58.333-8.333h-13.21c.46-1.303.71-2.706.71-4.167V33.333h12.5a4.167 4.167 0 0 1 4.167 4.167v41.666a4.167 4.167 0 0 1-4.167 4.167m-50-25h-8.333v8.333h8.333zm4.167 0h8.333v8.333h-8.333zm20.833 0h-8.333v8.333h8.333zm16.667 0h8.333v8.333h-8.333zm8.333-16.667h-8.333V50h8.333zm-58.333 0h8.333V50h-8.333zm20.833 0h-8.333V50h8.333zm4.167 0h8.333V50h-8.333zM29.167 25h-8.333v8.333h8.333zm4.167 0h8.333v8.333h-8.333zm20.833 0h-8.333v8.333h8.333z"
        clipRule="evenodd"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default SvgInvoices;
