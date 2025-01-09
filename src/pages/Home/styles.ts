import {StyleSheet} from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Dark background similar to the web version
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.5,
  },
  grid: {
    flex: 1,
    marginTop: 20,
  },
  carousel: {
    marginTop: 20,
    flex: 1,
  },
});
