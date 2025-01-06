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

const alertSettingScreenStyle = StyleSheet.create({
  text: {
    fontSize: normalize(12),
    color: '#fff',
    fontWeight: 'bold',
  },
  InformationContainer: {
    marginTop: normalizeHeight(10),
    marginLeft: normalize(20),
    marginRight: normalize(20),
  },
  slideContainer: {
    height: normalizeHeight(45),
    borderRadius: normalize(9),
    padding: normalize(10),
    marginBottom: normalizeHeight(20),
    width: '100%',
    backgroundColor: '#606060',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconTextContainer: {
    flexDirection: 'row',
  },
  icon: {
    color: '#fff',
    fontSize: normalize(16),
  },
  alternateText: {
    fontSize: normalize(11),
    marginLeft: normalize(9),
    fontWeight: 'bold',
    color: '#fff',
  },
  saveBtnContainer: {
    height: normalizeHeight(46),
    borderRadius: normalize(14),
    marginTop: normalizeHeight(310),
    width: '100%',
    backgroundColor: '#606060',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default alertSettingScreenStyle;