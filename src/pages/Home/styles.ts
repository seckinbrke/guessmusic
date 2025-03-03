import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Dark background similar to the web version
    padding: 16,
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
    flex: 0.3,
  },
  carousel: {
    flex: 1,
  },
  carouselTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
  },
  gridTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    margin: 8,
  },
  carouselContainer: {
    flex: 0.4,
  },
  gridContainer: {
    flex: 0.6,
  },
});
