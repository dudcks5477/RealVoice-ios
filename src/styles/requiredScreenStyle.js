import {StyleSheet} from 'react-native';

const requiredScreenStyle = StyleSheet.create({
  recommandContainer: {
    width: 370,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  space: {
    width: 10,
    height: '100%',
  },
  shareContainer: {
    width: 370,
    height: 80,
    backgroundColor: '#606060',
    borderRadius: 14,
    alignItems: 'center',
    flexDirection: 'row',
  },
  requestContainer: {
    flex: 1,
    alignItems: 'center',
  },
  requestHeaderText: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 7,
  },
  requiestSubText: {
    color: '#fff',
    opacity: 0.5,
  },
  friendContainer: {
    alignItems: 'center',
  },
});

export default requiredScreenStyle;