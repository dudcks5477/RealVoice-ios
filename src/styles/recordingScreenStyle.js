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

const recordingScreenStyle = StyleSheet.create({
  postBtnContainer: {
    width: normalize(164),
    height: normalizeHeight(39),
    marginTop: normalizeHeight(5),
    borderRadius: normalize(14),
    left: (SCREEN_WIDTH - normalize(164)) / 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postBtnText: {
    color: '#000',
    fontSize: normalize(11),
    fontWeight: 'bold',
  },
});

export default recordingScreenStyle;