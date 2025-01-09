import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgBack = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 14 11"
    {...props}>
    <Path
      fill="currentColor"
      d="M9.24 1.893H3.23l.385-.385a.88.88 0 0 0 0-1.236.88.88 0 0 0-1.237 0L.548 2.103a.88.88 0 0 0 0 1.237l1.831 1.832a.87.87 0 0 0 .619.257.87.87 0 0 0 .618-.257.88.88 0 0 0 0-1.237l-.303-.303h5.926a2.72 2.72 0 0 1 2.719 2.718A2.714 2.714 0 0 1 9.239 9.07H3.5a.88.88 0 0 0-.875.875c0 .478.397.874.875.874h5.74a4.476 4.476 0 0 0 4.469-4.468c0-2.461-2.007-4.457-4.469-4.457"
    />
  </Svg>
);
export default SvgBack;
