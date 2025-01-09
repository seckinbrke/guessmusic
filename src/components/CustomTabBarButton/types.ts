export type RouteName = 'HomeScreen' | 'BusinessInformationScreen';

export type IconMapType = {
  [key in RouteName]: React.FC<{color: string; width: number; height: number}>;
};

export type LabelMapType = {
  [key in RouteName]: string;
};
