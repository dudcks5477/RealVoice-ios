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

const worldTimeScreenStyle = StyleSheet.create({
  EditBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerText: {
    fontSize: normalize(12),
    marginBottom: normalizeHeight(20),
    color: '#fff',
    fontWeight: 'bold',
  },
  logoutContainer: {
    width: normalize(315),
    height: normalizeHeight(46),
    borderRadius: normalize(14),
    bottom: normalizeHeight(-450),
    backgroundColor: '#606060',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  logoutText: {
    fontSize: normalize(12),
    fontWeight: 'bold',
    color: '#000',
  },
});
export default worldTimeScreenStyle;