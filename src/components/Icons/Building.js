import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgBuilding = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 84 84"
    {...props}>
    <Path
      fill="currenColor"
      fillRule="evenodd"
      d="M12.833 8.667a4.167 4.167 0 0 0-4.166 4.167v58.333a4.167 4.167 0 0 0 4.166 4.166h33.334a4.167 4.167 0 0 0 4.166-4.166V12.834a4.167 4.167 0 0 0-4.166-4.167zm0 75h58.334c6.903 0 12.5-5.596 12.5-12.5V29.5c0-6.903-5.597-12.5-12.5-12.5h-12.5v-4.166c0-6.904-5.597-12.5-12.5-12.5H12.833C5.93.333.333 5.93.333 12.833v58.333c0 6.904 5.597 12.5 12.5 12.5m58.334-8.333H57.955c.46-1.304.712-2.706.712-4.167V25.334h12.5a4.167 4.167 0 0 1 4.166 4.166v41.667a4.167 4.167 0 0 1-4.166 4.166m-50-25h-8.334v8.333h8.334zm4.166 0h8.334v8.333h-8.334zm20.834 0h-8.334v8.333h8.334zm16.666 0h8.334v8.333h-8.334zm8.334-16.667h-8.334V42h8.334zm-58.334 0h8.334V42h-8.334zm20.834 0h-8.334V42h8.334zm4.166 0h8.334V42h-8.334zM21.167 17h-8.334v8.334h8.334zm4.166 0h8.334v8.334h-8.334zm20.834 0h-8.334v8.334h8.334z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBuilding;
