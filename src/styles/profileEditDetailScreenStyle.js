import {StyleSheet} from 'react-native';

const profileEditDetailScreenStyle = StyleSheet.create({
  bottomTextContainer: {
    marginTop: 240,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCamera: {
    fontSize: 15,
    color: '#fff',
    marginRight: 7,
  },
  bottomText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  InformationContainer: {
    marginTop: 40,
    marginLeft: 30,
    marginRight: 30,
  },
  nickname: {
    borderWidth: 1,
    height: 67,
    marginTop: 15,
    borderRadius: 14,
    padding: 10,
    borderColor: '#606060',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 13,
    marginTop: 10,
    marginLeft: 2,
    color: '#606060',
    fontWeight: 'bold',
  },
  userNameInput: {
    fontSize: 15,
    marginTop: -10,
    fontWeight: 'bold',
    color: '#fff',
  },
  saveBtnContainer: {
    width: 353,
    height: 46,
    borderRadius: 14,
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveBtnText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default profileEditDetailScreenStyle;