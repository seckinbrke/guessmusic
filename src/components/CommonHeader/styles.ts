import {StyleSheet} from 'react-native';
import {theme} from '../../constants/theme';

export default StyleSheet.create({
  container: {
    padding: 30,
    paddingBottom: 16,
  },
  header: {
    backgroundColor: theme.colors.main.primary,
    width: '100%',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
    height: 54,
    justifyContent: 'center',
  },
  headerWithBackButton: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: theme.colors.main.white,
  },
  description: {
    fontSize: 16,
    color: theme.colors.main.white,
  },
  settingsButtonContainer: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    position: 'absolute',
    top: 23,
    right: 16,
    backgroundColor: theme.colors.main.white,
    borderRadius: 99,
  },
  settingsButton: {
    width: 54,
    height: 54,
    backgroundColor: 'black',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonContainer: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    position: 'absolute',
    top: 23,
    left: 16,
    backgroundColor: theme.colors.main.white,
    borderRadius: 99,
  },
  backButton: {
    width: 54,
    height: 54,
    backgroundColor: 'black',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    marginRight: 2,
  },
});
