import { StyleSheet, Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const BASE_WIDTH = 360;
const BASE_HEIGHT = 800;

function normalize(size) {
  return Math.round(PixelRatio.roundToNearestPixel(size * (SCREEN_WIDTH / BASE_WIDTH)));
}

function normalizeHeight(size) {
  return Math.round(PixelRatio.roundToNearestPixel(size * (SCREEN_HEIGHT / BASE_HEIGHT)));
}

const recordScreenStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
  },
  image: {
    borderRadius: normalize(11),
    opacity: 0.8,
    height: normalizeHeight(700),
    marginTop: normalize(25),
    width: '100%',
  },
  timerContainer: {
    position: 'absolute',
    width: '100%',
    height: normalizeHeight(760),
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    fontSize: normalize(30),
    color: '#000',
    fontWeight: 'bold',
  },
  timerBtn: {
    width: normalize(150),
    height: normalizeHeight(160),
    borderRadius: normalize(86.5),
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: normalizeHeight(5),
  },
  icon: {
    fontSize: normalize(35),
    color: '#fff',
  },
  timerText: {
    fontSize: normalize(10),
    color: '#000',
    fontWeight: 'bold',
  },
  descriptText: {
    fontSize: normalize(10),
    marginTop: normalizeHeight(6),
    color: '#fff',
    textAlign: 'center',
  },
});

export default recordScreenStyle;