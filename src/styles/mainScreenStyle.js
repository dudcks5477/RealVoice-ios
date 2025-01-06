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

const mainScreenStyle = StyleSheet.create({
  header: {
    marginTop: normalizeHeight(37),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    paddingHorizontal: normalize(10),
  },
  icon: {
    color: '#fff',
    fontSize: normalize(40),
  },
  headerText: {
    color: '#fff',
    fontSize: normalize(23),
    fontWeight: 'bold',
  },
  buttonContainer: {
    paddingHorizontal: normalize(10),
    flexDirection: 'row',
  },
  button: {
    color: '#fff',
  },
  circle: {
    width: normalize(30),
    height: normalizeHeight(30),
    borderRadius: normalize(15),
    backgroundColor: '#2a55ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: normalize(350),
    height: normalizeHeight(600),
    borderRadius: normalize(25),
    marginTop: normalizeHeight(40),
    opacity: 0.8,
  },
  textContainer: {
    position: 'absolute',
    top: '45%',
    textAlign: 'center',
  },
  imageText: {
    color: '#fff',
    fontSize: normalize(25),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subImageText: {
    color: '#fff',
    fontSize: normalize(12),
    textAlign: 'center',
  },
  voiceBtn: {
    width: normalize(200),
    height: normalizeHeight(43),
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalizeHeight(20),
    borderRadius: normalize(15),
  },
  buttonText: {
    color: '#000',
    fontSize: normalize(12),
  },
});

export default mainScreenStyle;