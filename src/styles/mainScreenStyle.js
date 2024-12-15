import {StyleSheet} from 'react-native';

const mainScreenStyle = StyleSheet.create({
  header: {
    marginTop: 37,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    paddingHorizontal: 10,
  },
  icon: {
    color: '#fff',
    fontSize: 40,
  },
  headerText: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
  },
  buttonContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  button: {
    color: '#fff',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#2a55ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 397,
    height: 600,
    borderRadius: 25,
    marginTop: 70,
    opacity: 0.8,
  },
  textContainer: {
    position: 'absolute',
    top: '50%',
    textAlign: 'center',
  },
  imageText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subImageText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  voiceBtn: {
    width: 233,
    height: 43,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: '#000',
    fontSize: 14,
  },
});

export default mainScreenStyle;