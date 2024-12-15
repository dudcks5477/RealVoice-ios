import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_URL} from '@env';
import {UserContext} from '../contexts/UserContext';
import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';
import profileScreenStyle from '../styles/profileScreenStyle';
import editProfileScreenStyle from '../styles/editProfileScreenStyle';
import worldTimeScreenStyle from '../styles/worldTimeScreenStyle';
import otherSettingScreenStyle from '../styles/otherSettingScreenStyle';

const OtherSettingScreen = () => {
  const navigation = useNavigation();
  const {userData} = useContext(UserContext);
  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const clearAppCache = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert('캐시 지우기', '모든 음성이 성공적으로 지워졌습니다.');
    } catch (error) {
      console.error('Failed to clear the async storage', error);
    }
  };

  const deleteAccount = async () => {
    Alert.alert(
      '계정 삭제',
      '계정을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '삭제',
          onPress: async () => {
            try {
              const response = await axios.delete(`${API_URL}/api/users`, {
                headers: {
                  Authorization: 'Bearer YOUR_AUTH_TOKEN',
                },
              });
              console.log('계정이 성공적으로 삭제되었습니다.');
              navigation.navigate('Splash');
            } catch (error) {
              console.error('계정 삭제 중 에러 발생:', error);
            }
          },
        },
      ],
    );
  };

  return (
    <View style={Common.container}>
      <View style={mainScreenStyle.header}>
        <TouchableOpacity
          style={mainScreenStyle.iconContainer}
          onPress={handleEditProfile}>
          <View style={profileScreenStyle.headerBack}>
            <Icon name="arrow-back" style={profileScreenStyle.icon} />
            <Text style={profileScreenStyle.headerText}>다른 설정들</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={worldTimeScreenStyle.EditBtnContainer}>
        <View style={editProfileScreenStyle.actionContainer}>
          <TouchableOpacity
            style={editProfileScreenStyle.actionBtn}
            onPress={clearAppCache}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon name="cached" style={editProfileScreenStyle.iconCalendar} />
            </View>
            <Text style={editProfileScreenStyle.nickname}>캐시 지우기</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={otherSettingScreenStyle.logoutContainer}
          onPress={deleteAccount}>
          <Text style={editProfileScreenStyle.logoutText}>계정 삭제</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtherSettingScreen;