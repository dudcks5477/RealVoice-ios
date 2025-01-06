import {StyleSheet, Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const BASE_WIDTH = 360;
const BASE_HEIGHT = 800;

function normalize(size) {
  return Math.round(PixelRatio.roundToNearestPixel(size * (SCREEN_WIDTH / BASE_WIDTH)));
}

function normalizeHeight(size) {
  return Math.round(PixelRatio.roundToNearestPixel(size * (SCREEN_HEIGHT / BASE_HEIGHT)));
}


const Common = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerText: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    fontSize: normalize(18),
    marginTop: normalizeHeight(30),
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  assign: {
    color: '#6178F1',
    textDecorationLine: 'underline',
  },
  assignColor: {
    color: '#6178F1',
    textAlign: 'center',
  },
  nextBtn: {
    backgroundColor: '#fff',
    width: normalize(160),
    height: normalizeHeight(53),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalizeHeight(30),
  },
  nextBtnContainer: {
    alignItems: 'center',
    marginBottom: normalizeHeight(30),
  },
  nextBtnText: {
    color: '#000',
    fontSize: normalize(16),
  },
});
export default Common;