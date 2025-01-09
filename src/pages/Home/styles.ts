import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';
import {HEIGHT, WIDTH} from '../../constants/common';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.main.secondary,
    alignItems: 'center',
    paddingTop: theme.spacing(2),
  },
  headerText: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    color: theme.colors.main.white,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 120,
  },
  icon: {
    width: 70,
    height: 70,
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.regular,
    color: theme.colors.main.darkGray,
    lineHeight: 28,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: theme.fonts.regular,
    color: theme.colors.main.darkGray,
    lineHeight: 28,
  },
  bgImage: {
    resizeMode: 'stretch',
  },
  background: {
    height: HEIGHT * 0.66,
    width: WIDTH - 64,
    paddingTop: theme.spacing(3),
    paddingHorizontal: theme.spacing(3),
  },
  invoicesContainer: {
    height: HEIGHT * 0.6,
    paddingTop: 10,
  },
  invoiceItem: {
    backgroundColor: theme.colors.main.cardBg,
    height: 64,
    borderRadius: 35,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  invoiceTitle: {
    color: theme.colors.main.white,
    fontSize: 15,
    fontFamily: theme.fonts.regular,
  },
  invoiceDate: {
    color: theme.colors.main.white,
    fontSize: 12,
    fontFamily: theme.fonts.light,
    opacity: 0.8,
  },
  flatListContent: {
    paddingBottom: 10,
  },
});
