import {StyleSheet} from 'react-native';

const worldTimeScreenStyle = StyleSheet.create({
  EditBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerText: {
    fontSize: 13,
    marginBottom: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  logoutContainer: {
    width: 360,
    height: 46,
    borderRadius: 14,
    bottom: -470,
    backgroundColor: '#606060',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  logoutText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
});
export default worldTimeScreenStyle;