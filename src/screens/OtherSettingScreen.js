import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';
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

  const deleteAccount = async userUuid => {
    Alert.alert(
      '계정 삭제',
      "회원님이 탈퇴를 요청하신 경우, 커뮤니티의 안전성과 원활한 운영을 위해 회원님의 일부 개인정보(휴대폰번호)가 신고 관리 목적으로 최대 6개월간 보관됩니다.\n이 기간 동안 보관된 개인정보는 신고된 게시물 및 사용자 보호를 위한 용도로만 사용되며, 6개월 경과 후에는 완전히 삭제됩니다.",
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '삭제',
          onPress: async () => {
            try {
              const url = `${API_URL}/user/remove`;
              console.log('Request URL:', url);
              const response = await axios.post(url, {userUuid});
              console.log('Response:', response.data);
              console.log('계정이 성공적으로 삭제되었습니다.');
              navigation.navigate('Splash');
            } catch (error) {
              console.log('User UUID:', userUuid)
              console.log('Error response:', error.response?.data || error.message);
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
          onPress={() => deleteAccount(userData.userUuid)}>
          <Text style={editProfileScreenStyle.logoutText}>계정 삭제</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtherSettingScreen;