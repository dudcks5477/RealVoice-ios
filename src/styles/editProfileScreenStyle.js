import {StyleSheet} from 'react-native';

const EditProfileScreenStyle = StyleSheet.create({
  EditBtnContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileBtn: {
    width: 360,
    height: 57,
    borderRadius: 14,
    backgroundColor: '#606060',
    flexDirection: 'row',
    alignItems: 'center',
  },
  nickname: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
  },
  username: {
    fontSize: 11,
    color: '#fff',
  },
  actionContainer: {
    marginTop: 20,
  },
  containerText: {
    fontSize: 13,
    marginBottom: 10,
    color: '#606060',
    fontWeight: 'bold',
  },
  actionBtn: {
    width: 360,
    height: 46,
    borderRadius: 14,
    backgroundColor: '#606060',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCalendar: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 4,
  },
  settingAlertBtn: {
    width: 360,
    height: 46,
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    backgroundColor: '#606060',
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingBtn: {
    width: 360,
    height: 46,
    borderTopWidth: 0.5,
    borderColor: '#fff',
    backgroundColor: '#606060',
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingsOtherBtn: {
    borderTopWidth: 0.5,
    width: 360,
    height: 46,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    borderColor: '#fff',
    backgroundColor: '#606060',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoutContainer: {
    width: 360,
    height: 46,
    borderRadius: 14,
    marginTop: 30,
    backgroundColor: '#606060',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#dd1b1b',
  },
  version: {
    fontSize: 13,
    marginTop: 20,
    color: '#606060',
    fontWeight: 'bold',
  },
});

export default EditProfileScreenStyle;