import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const gridItemWidth = (width - 64) / 2;
const imageHeight = 120;

export default StyleSheet.create({
  container: {
    borderRadius: 8,
    alignItems: 'center',
  },
  carouselCard: {
    width: width * 0.8,
    height: width * 0.55,
    alignSelf: 'center',
  },
  gridCard: {
    width: gridItemWidth,
    height: 220,
    margin: 8,
  },
  image: {
    marginTop: 16,
    width: '80%',
    height: imageHeight,
    borderRadius: 8,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 2,
  },
  winnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: 'transparent',
  },
  winnerText: {
    color: '#FFD700',
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '500',
  },
  cupIcon: {
    width: 16,
    height: 16,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    paddingLeft: 24,
  },
});
