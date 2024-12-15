import {StyleSheet} from 'react-native';

const changeProfileScreenStyle = StyleSheet.create({
  buttonContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#2a55ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomTextContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCamera: {
    position: 'absolute',
    color: '#fff',
    fontSize: 25,
    marginTop: 118,
    marginLeft: 225,
  },
  saveBtnContainer: {
    width: 353,
    height: 46,
    borderRadius: 14,
    marginTop: 172,
    backgroundColor: '#606060',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default changeProfileScreenStyle;