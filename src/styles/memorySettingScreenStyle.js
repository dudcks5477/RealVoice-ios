import {StyleSheet} from 'react-native';

const MemorySettingScreenStyle = StyleSheet.create({
  mainTextContainer: {
    padding: 23,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 12,
    marginTop: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  disabledContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
  disabledBtnContainer: {
    borderWidth: 1,
    // height: 152,
    marginTop: 15,
    borderRadius: 14,
    padding: 15,
    borderColor: '#dd1b1b',
  },
  disabledBtn: {
    width: 145,
    height: 33,
    marginTop: 20,
    borderRadius: 9,
    backgroundColor: '#606060',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledBtnText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#dd1b1b',
  },
});

export default MemorySettingScreenStyle;