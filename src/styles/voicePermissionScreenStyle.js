import {StyleSheet} from 'react-native';

const voicePermissionScreenStyle = StyleSheet.create({
  headerText: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    fontSize: 35,
    marginTop: 189,
  },
  subText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 11,
    marginTop: 15,
    fontWeight: 'bold',
  },
  permissionContaine: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 18,
    width: 300,
    height: 250,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40,
  },
  permissionHeaderText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 16,
    marginTop: 50,
  },
  permissionText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 10,
  },
  permitBtn: {
    marginTop: 'auto',
    width: '100%',
  },
  permitBtnItem: {
    width: '100%',
    height: 40,
    borderTopWidth: 1,
    borderTopColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  permit: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  permitNegative: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default voicePermissionScreenStyle;