import {StyleSheet} from 'react-native';

const signUpPhoneNumberScreenStyle = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 70,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 35,
  },
  phoneNumber: {
    height: 80,
    flex: 1,
    paddingHorizontal: 10,
    textAlign: 'left',
    fontSize: 30,
    color: '#fff',
  },
  text: {
    fontSize: 12,
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  countryPicker: {
    height: 40,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default signUpPhoneNumberScreenStyle;