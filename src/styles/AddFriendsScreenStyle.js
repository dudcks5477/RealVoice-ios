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

const addFriendsScreenStyle = StyleSheet.create({
  header: {
    marginTop: normalizeHeight(30),
    zIndex: 1,
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#fff',
    fontSize: normalize(23),
    fontWeight: 'bold',
  },
  iconContainer: {
    paddingHorizontal: normalize(10),
  },
  iconNone: {
    fontSize: normalize(25),
    color: 'transparent',
  },
  icon: {
    color: '#fff',
    fontSize: normalize(25),
  },
  search: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalizeHeight(60),
  },
  searchContainer: {
    width: normalize(370),
    height: normalizeHeight(40),
    backgroundColor: '#606060',
    borderRadius: normalize(14),
    marginTop: normalizeHeight(20),
    paddingHorizontal: normalize(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    color: '#fff',
    fontSize: normalize(20),
  },
  searchInput: {
    color: '#fff',
    fontSize: normalize(13),
  },
  contact: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalizeHeight(75),
  },
  share: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalizeHeight(15),
  },
  shareContainer: {
    width: normalize(370),
    height: normalizeHeight(55),
    backgroundColor: '#606060',
    borderRadius: normalize(14),
    alignItems: 'center',
    flexDirection: 'row',
  },
  Invited: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: normalize(14),
  },
  nickName: {
    color: '#fff',
  },
  shareIconContainer: {
    marginLeft: normalize(190),
  },
  shareIcon: {
    color: '#fff',
    fontSize: normalize(20),
  },
  recommand: {
    marginTop: normalizeHeight(20),
    alignItems: 'center',
  },
  recommandContainer: {
    width: normalize(370),
    alignItems: 'center',
    flexDirection: 'row',
  },
  recommandText: {
    color: '#606060',
    fontSize: normalize(13),
    fontWeight: 'bold',
  },
  addFriendContainer: {
    width: normalize(380),
    borderRadius: normalize(14),
    marginTop: normalizeHeight(20),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circle: {
    width: normalize(44),
    height: normalizeHeight(44),
    borderRadius: normalize(22),
    backgroundColor: '#2a55ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nickNameContainer: {
    marginLeft: normalize(10),
  },
  button: {
    color: '#fff',
    fontSize: normalize(25),
    fontWeight: 'bold',
  },
  addCancelBtn: {
    flexDirection: 'row',
  },
  addBtn: {
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(16),
    width: normalize(40),
    height: normalizeHeight(32),
  },
  addText: {
    color: '#000',
    fontSize: normalize(13),
  },
  cancelBtn: {
    justifyContent: 'center',
    marginLeft: normalize(13),
  },
  cancelIcon: {
    color: '#fff',
    fontSize: normalize(30),
  },
  moreDetail: {
    marginTop: normalizeHeight(20),
    backgroundColor: '#606060',
    width: normalize(83),
    height: normalizeHeight(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(15),
    position: 'absolute',
    bottom: normalizeHeight(-60),
  },
  invitedFriend: {
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(16),
    width: normalize(40),
    height: normalizeHeight(32),
    marginRight: normalize(20),
  },
  selectFooter: {
    width: normalize(160),
    height: normalizeHeight(45),
    padding: normalize(8),
    borderRadius: normalize(15),
    bottom: normalizeHeight(10),
    left: (SCREEN_WIDTH - normalize(160)) / 2,
    backgroundColor: '#606060',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  textRecommandContainer: {
    width: normalize(39),
    height: normalizeHeight(31),
    borderRadius: normalize(16),
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTextContainer: {
    backgroundColor: '#d9d9d9',
  },
  footerText: {
    color: '#000',
    fontWeight: 'bold',
  },
  textMore: {
    width: normalize(39),
    height: normalizeHeight(31),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default addFriendsScreenStyle;
