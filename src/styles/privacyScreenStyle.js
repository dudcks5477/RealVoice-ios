import {StyleSheet} from 'react-native';

const privacyScreenStyle = StyleSheet.create({
  InformationContainer: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  btnContainer: {
    marginBottom: 15,
  },
  slideContainer: {
    height: 45,
    borderRadius: 9,
    padding: 10,
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#606060',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnDescript: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#606060',
  },
});
export default privacyScreenStyle;