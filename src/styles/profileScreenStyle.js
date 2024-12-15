import {StyleSheet} from 'react-native';

const profileScreenStyle = StyleSheet.create({
  headerBack: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
    fontSize: 21,
  },
  headerText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    height: 336,
    opacity: 0.8,
    width: '100%',
    position: 'absolute',
  },
  bottomTextContainer: {
    marginLeft: 20,
    marginTop: 230,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  iconShare: {
    color: '#fff',
    fontSize: 21,
    marginRight: 14,
  },
  introContainer: {
    padding: 24,
  },
  introFix: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
  },
  country: {
    color: '#606060',
    fontWeight: 'bold',
  },
  userMemorizeContainer: {
    marginTop: -20,
    padding: 24,
  },
  memorizeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  memorizeFix: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  iconLock: {
    fontSize: 15,
    marginRight: 5,
    color: '#606060',
  },
  calenderContainer: {
    marginTop: 20,
    height: 335,
    borderRadius: 15,
    backgroundColor: '#606060',
  },
  calenderHeader: {
    marginTop: 20,
    marginLeft: 15,
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  calenderBtnContainer: {
    paddingTop: 15,
    flexDirection: 'row',
  },
  calenderBtn: {
    width: 43,
    height: 55,
    borderRadius: 15,
    marginTop: 6,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  todayCircle: {
    borderWidth: 4,
    borderColor: '#000',
    borderRadius: 15,
  },
  iconPlay: {
    opacity: 0.6,
    fontSize: 30,
    color: '#000',
    position: 'absolute',
  },
  calenderDay: {
    fontSize: 20,
    color: '#000',
    fontWeight: '900',
  },
});

export default profileScreenStyle;