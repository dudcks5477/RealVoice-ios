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

const helpScreenStyle = StyleSheet.create({
  arrowIconContainer: {
    position: 'absolute',
    right: normalize(10),
  },
  iconCalendar: {
    fontSize: normalize(20),
    color: 'gray',
    fontWeight: 'bold',
  },
});
export default helpScreenStyle;