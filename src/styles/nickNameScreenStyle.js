import {StyleSheet} from 'react-native';

const nickNameScreenStyle = StyleSheet.create({
  inputContainer: {
    marginTop: 60,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    width: '60%',
    paddingHorizontal: 15,
    textAlign: 'center',
    fontSize: 40,
    height: 70,
    backgroundColor: '#fff',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  nextBtn: {
    backgroundColor: '#fff',
    width: 160,
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  nextBtnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 30,
  },
  nextBtnText: {
    color: '#000',
    fontSize: 16,
  },
});

export default nickNameScreenStyle;