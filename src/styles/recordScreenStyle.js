import {StyleSheet} from 'react-native';

const recordScreenStyle = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
  },
  image: {
    borderRadius: 11,
    opacity: 0.8,
    height: 740,
    zIndex: -1,
    marginTop: 30,
    width: '100%',
  },
  timerContainer: {
    position: 'absolute',
    width: '100%',
    height: 815,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    fontSize: 40,
    marginBottom: 5,
    color: '#000',
    fontWeight: 'bold',
  },
  timerBtn: {
    width: 173,
    height: 173,
    borderRadius: 180,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    fontSize: 40,
    color: '#fff',
  },
  timerText: {
    fontSize: 11,
    color: '#000',
    fontWeight: 'bold',
  },
  descriptText: {
    fontSize: 11,
    marginTop: 7,
    color: '#fff',
    textAlign: 'center',
  },
});

export default recordScreenStyle;