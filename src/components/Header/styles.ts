import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 120,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerContainer: {
    flex: 2,
    alignItems: 'center',
    width: 200,
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.main.white,
  },
  backView: {
    backgroundColor: theme.colors.main.gray,
    width: 28,
    height: 28,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tickView: {
    backgroundColor: theme.colors.main.gray,
    width: 28,
    height: 28,
    borderRadius: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});
