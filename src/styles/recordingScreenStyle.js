import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const recordingScreenStyle = StyleSheet.create({
  postBtnContainer: {
    width: 164,
    height: 39,
    marginTop: 10,
    borderRadius: 14,
    left: (windowWidth - 160) / 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postBtnText: {
    color: '#000',
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default recordingScreenStyle;