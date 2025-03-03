import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgEdit = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 31 31"
    {...props}>
    <Path
      fill="#1D2125"
      d="M20.574 2.375H8.966c-5.031 0-8.05 3.004-8.05 8.05v11.594c0 5.06 3.019 8.064 8.05 8.064H20.56c5.046 0 8.05-3.004 8.05-8.05V10.425c.014-5.046-3.004-8.05-8.036-8.05"
      opacity={0.4}
    />
    <Path
      fill="#1D2125"
      d="M28.652 2.345c-2.61-2.625-5.163-2.683-7.846 0L19.158 3.98a.53.53 0 0 0-.131.54 10.94 10.94 0 0 0 7.452 7.451c.044.015.117.015.16.015a.56.56 0 0 0 .394-.16l1.619-1.634c1.327-1.327 1.983-2.596 1.983-3.894 0-1.312-.656-2.61-1.983-3.952M24.045 13.195c-.394-.19-.773-.379-1.123-.598a11 11 0 0 1-.86-.568c-.234-.146-.496-.365-.759-.584a1.5 1.5 0 0 1-.233-.204c-.452-.364-.934-.86-1.386-1.4a1.1 1.1 0 0 1-.19-.248 5.4 5.4 0 0 1-.553-.743 7 7 0 0 1-.525-.802 12 12 0 0 1-.584-1.109c-.19-.408-.335-.787-.466-1.152L9.52 13.633c-.51.51-1.006 1.473-1.109 2.187l-.627 4.346c-.13.919.117 1.78.686 2.348.481.481 1.137.73 1.866.73.16 0 .321-.015.482-.03l4.33-.612c.716-.102 1.678-.584 2.188-1.109l7.846-7.845c-.364-.117-.729-.278-1.137-.453"
    />
  </Svg>
);
export default SvgEdit;
