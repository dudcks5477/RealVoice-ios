import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const addFriendsScreenStyle = StyleSheet.create({
  header: {
    marginTop: 30,
    zIndex: 1,
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
  },
  iconContainer: {
    paddingHorizontal: 10,
  },
  iconNone: {
    fontSize: 25,
    color: 'transparent',
  },
  icon: {
    color: '#fff',
    fontSize: 25,
  },
  search: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  searchContainer: {
    width: 370,
    height: 40,
    backgroundColor: '#606060',
    borderRadius: 14,
    marginTop: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    color: '#fff',
    fontSize: 20,
  },
  searchInput: {
    color: '#fff',
    fontSize: 13,
  },
  contact: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 75,
  },
  share: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  shareContainer: {
    width: 370,
    height: 55,
    backgroundColor: '#606060',
    borderRadius: 14,
    alignItems: 'center',
    flexDirection: 'row',
  },
  Invited: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  nickName: {
    color: '#fff',
  },
  shareIconContainer: {
    marginLeft: 190,
  },
  shareIcon: {
    color: '#fff',
    fontSize: 20,
  },
  recommand: {
    marginTop: 20,
    // height: 345,
    alignItems: 'center',
  },
  recommandContainer: {
    width: 370,
    alignItems: 'center',
    flexDirection: 'row',
  },
  recommandText: {
    color: '#606060',
    fontSize: 13,
    fontWeight: 'bold',
  },
  addFriendContainer: {
    width: 380,
    borderRadius: 14,
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circle: {
    width: 44,
    height: 44,
    borderRadius: 52,
    backgroundColor: '#2a55ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nickNameContainer: {
    marginLeft: 10,
  },
  button: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  addCancelBtn: {
    flexDirection: 'row',
  },
  addBtn: {
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    width: 40,
    height: 32,
  },
  addText: {
    color: '#000',
    fontSize: 13,
  },
  cancelBtn: {
    justifyContent: 'center',
    marginLeft: 13,
  },
  cancelIcon: {
    color: '#fff',
    fontSize: 30,
  },
  moreDetail: {
    marginTop: 20,
    backgroundColor: '#606060',
    width: 83,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    position: 'absolute',
    bottom: -60,
  },
  invitedFriend: {
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    width: 40,
    height: 32,
    marginRight: 20,
  },
  selectFooter: {
    width: 160,
    height: 45,
    padding: 8,
    borderRadius: 15,
    bottom: 10,
    left: (windowWidth - 160) / 2,
    backgroundColor: '#606060',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  textRecommandContainer: {
    width: 39,
    height: 31,
    borderRadius: 16,
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
    width: 39,
    height: 31,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default addFriendsScreenStyle;