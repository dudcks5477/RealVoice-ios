import {StyleSheet} from 'react-native';

const alertSettingScreenStyle = StyleSheet.create({
  text: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  InformationContainer: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  slideContainer: {
    height: 45,
    borderRadius: 9,
    padding: 10,
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#606060',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconTextContainer: {
    flexDirection: 'row',
  },
  icon: {
    color: '#fff',
    fontSize: 18,
  },
  alternateText: {
    fontSize: 13,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  saveBtnContainer: {
    height: 46,
    borderRadius: 14,
    marginTop: 350,
    width: '100%',
    backgroundColor: '#606060',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default alertSettingScreenStyle;