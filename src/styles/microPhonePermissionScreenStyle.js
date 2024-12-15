import {StyleSheet} from 'react-native';

const microPhonePermissionScreenStyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  nextBtn: {
    backgroundColor: '#fff',
    width: 296,
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  nextBtnContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 30,
  },
  nextBtnText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default microPhonePermissionScreenStyle;