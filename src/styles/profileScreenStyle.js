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

const profileScreenStyle = StyleSheet.create({
  headerBack: {
    marginLeft: normalize(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
    fontSize: normalize(21),
  },
  headerText: {
    fontSize: normalize(16),
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    height: normalizeHeight(336),
    opacity: 0.8,
    width: '100%',
    position: 'absolute',
  },
  bottomTextContainer: {
    marginLeft: normalize(20),
    marginTop: normalizeHeight(230),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomText: {
    color: '#fff',
    fontSize: normalize(30),
    fontWeight: 'bold',
  },
  iconShare: {
    color: '#fff',
    fontSize: normalize(21),
    marginRight: normalize(14),
  },
  introContainer: {
    padding: normalizeHeight(24),
  },
  introFix: {
    fontSize: normalize(17),
    color: '#fff',
    fontWeight: 'bold',
  },
  country: {
    color: '#606060',
    fontWeight: 'bold',
  },
  userMemorizeContainer: {
    marginTop: normalize(-20),
    padding: normalizeHeight(24),
  },
  memorizeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  memorizeFix: {
    fontSize: normalize(20),
    color: '#fff',
    fontWeight: 'bold',
  },
  iconLock: {
    fontSize: normalize(15),
    marginRight: normalize(5),
    color: '#606060',
  },
  calenderContainer: {
    marginTop: normalizeHeight(20),
    height: normalizeHeight(335),
    borderRadius: normalize(15),
    backgroundColor: '#606060',
  },
  calenderHeader: {
    marginTop: normalizeHeight(20),
    marginLeft: normalize(15),
    fontSize: normalize(15),
    color: '#fff',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: normalize(5),
  },
  calenderBtnContainer: {
    paddingTop: normalizeHeight(15),
    flexDirection: 'row',
  },
  calenderBtn: {
    width: normalize(43),
    height: normalizeHeight(55),
    borderRadius: normalize(15),
    marginTop: normalizeHeight(6),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  todayCircle: {
    borderWidth: normalize(4),
    borderColor: '#000',
    borderRadius: normalize(15),
  },
  iconPlay: {
    opacity: 0.6,
    fontSize: normalize(30),
    color: '#000',
    position: 'absolute',
  },
  calenderDay: {
    fontSize: normalize(20),
    color: '#000',
    fontWeight: '900',
  },
});

export default profileScreenStyle;