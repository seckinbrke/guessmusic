import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';

export default StyleSheet.create({
  text: {
    fontSize: 15,
    marginTop: 4,
    fontFamily: theme.fonts.semibold,
  },
  button: {
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 44,
    height: 44,
    borderRadius: 99,
  },
  newInvoiceContainer: {
    backgroundColor: theme.colors.main.white,
    borderWidth: 1,
    borderColor: theme.colors.main.primary,
    width: 76,
    height: 76,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
