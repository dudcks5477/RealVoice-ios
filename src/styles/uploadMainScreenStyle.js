import {StyleSheet} from 'react-native';

const UploadMainScreenStyle = StyleSheet.create({
  uploadedContainer: {
    alignItems: 'center',
  },
  voiceContainer: {
    borderWidth: 1,
    borderRadius: 14,
    width: 350,
    height: 90,
    marginTop: 30,
    borderColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#2a55ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    color: '#fff',
  },
  userName: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  timerBtn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 30,
    color: '#000',
  },
});
export default UploadMainScreenStyle;