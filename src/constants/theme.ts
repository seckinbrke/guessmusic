export const theme = {
  colors: {
    main: {
      primary: '#CCF658',
      secondary: '#1D2125',
      black: '#000',
      white: '#FFF',
      cardBg: '#3d4044',
      gray: '#737578',
      purchaseText: '#6D7278',
      darkGray: '#696969',
      lightGray: '#BBBBBB',
      textGray: '#828282',
      settingsGray: '#F0F0F5',
    },
  },
  fonts: {
    bold: 'Exo2-Bold',
    extraBold: 'Exo2-ExtraBold',
    regular: 'Exo2-Regular',
    medium: 'Exo2-Medium',
    semibold: 'Exo2-SemiBold',
    light: 'Exo2-Light',
    robotoRegular: 'RobotoMono-Regular',
    robotoBold: 'RobotoMono-Bold',
  },
  spacing: (factor: number) => factor * 8,
};
