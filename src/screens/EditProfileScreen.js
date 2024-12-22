import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Share, Linking} from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../contexts/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';
import profileScreenStyle from '../styles/profileScreenStyle';
import editProfileScreenStyle from '../styles/editProfileScreenStyle';

const EditProfileScreen = () => {
  const {userData} = useContext(UserContext);
  const navigation = useNavigation();
  const userName = userData?.userName || 'realVoice';
  const firstLetter = userName.charAt(0).toUpperCase();

  const handleProfile = () => {
    navigation.navigate('Profile');
  };
  const handleProfileEditDetail = () => {
    navigation.navigate('ProfileEditDetail');
  };
  const handleMemorySetting = () => {
    navigation.navigate('MemorySetting');
  };
  const handleAlertSetting = () => {
    navigation.navigate('AlertSetting');
  };
  const handlePrivacy = () => {
    navigation.navigate('Privacy');
  };
  const handleWorldTime = () => {
    navigation.navigate('WorldTime');
  };
  const handleOtherSetting = () => {
    navigation.navigate('OtherSetting');
  };
  const handleHelp = () => {
    navigation.navigate('Help');
  };
  const handleInformation = () => {
    navigation.navigate('Information');
  };

  const handleShare = async () => {
    const shareOptions = {
      message: '당신의 RealVoice를 친구들에게 공유하세요', // 공유할 메시지
    };

    try {
      const result = await Share.share(shareOptions);
      console.log(result.action);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      navigation.reset({
        index: 0,
        routes: [{name: 'Splash'}],
      });
    } catch (error) {
      console.error('Fail to logout:', error);
    }
  };

  const handleReview = () => {
    const url = 'https://play.google.com/store/app/details?id=com.yourappname';
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <View style={Common.container}>
      <View style={mainScreenStyle.header}>
        <TouchableOpacity
          style={mainScreenStyle.iconContainer}
          onPress={handleProfile}>
          <View style={profileScreenStyle.headerBack}>
            <Icon name="arrow-back" style={profileScreenStyle.icon} />
            <Text style={profileScreenStyle.headerText}>
              {userData.nickName}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={editProfileScreenStyle.EditBtnContainer}>
        <TouchableOpacity
          style={editProfileScreenStyle.profileBtn}
          onPress={handleProfileEditDetail}>
          <View style={mainScreenStyle.buttonContainer}>
            <View style={mainScreenStyle.circle}>
              <Text style={mainScreenStyle.button}>{firstLetter}</Text>
            </View>
          </View>
          <View>
            <Text style={editProfileScreenStyle.nickname}>
              {userData.nickName}
            </Text>
            <Text style={editProfileScreenStyle.username}>
              {userData.nickName}
            </Text>
          </View>
        </TouchableOpacity>
        {/* 기능 */}
        <View style={editProfileScreenStyle.actionContainer}>
          <Text style={editProfileScreenStyle.containerText}>기능</Text>
          <TouchableOpacity
            style={editProfileScreenStyle.actionBtn}
            onPress={handleMemorySetting}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon
                name="calendar-month"
                style={editProfileScreenStyle.iconCalendar}
              />
            </View>
            <Text style={editProfileScreenStyle.nickname}>추억</Text>
          </TouchableOpacity>
        </View>
        {/* 설정 */}
        <View style={editProfileScreenStyle.actionContainer}>
          <Text style={editProfileScreenStyle.containerText}>설정</Text>
          <TouchableOpacity
            style={editProfileScreenStyle.settingAlertBtn}
            onPress={handleAlertSetting}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon
                name="add-alert"
                style={editProfileScreenStyle.iconCalendar}
              />
            </View>
            <Text style={editProfileScreenStyle.nickname}>알림</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={editProfileScreenStyle.settingBtn}
            onPress={handlePrivacy}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon
                name="security"
                style={editProfileScreenStyle.iconCalendar}
              />
            </View>
            <Text style={editProfileScreenStyle.nickname}>개인정보 보호</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={editProfileScreenStyle.settingBtn}
            onPress={handleWorldTime}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon
                name="access-time"
                style={editProfileScreenStyle.iconCalendar}
              />
            </View>
            <Text style={editProfileScreenStyle.nickname}>시간대</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={editProfileScreenStyle.settingsOtherBtn}
            onPress={handleOtherSetting}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon
                name="settings"
                style={editProfileScreenStyle.iconCalendar}
              />
            </View>
            <Text style={editProfileScreenStyle.nickname}>다른 설정들</Text>
          </TouchableOpacity>
        </View>
        {/* 정보 */}
        <View style={editProfileScreenStyle.actionContainer}>
          <Text style={editProfileScreenStyle.containerText}>정보</Text>
          <TouchableOpacity
            style={editProfileScreenStyle.settingAlertBtn}
            onPress={handleShare}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon name="share" style={editProfileScreenStyle.iconCalendar} />
            </View>
            <Text style={editProfileScreenStyle.nickname}>
              RealVoice 공유하기
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={editProfileScreenStyle.settingBtn}
            onPress={handleReview}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon
                name="star-outline"
                style={editProfileScreenStyle.iconCalendar}
              />
            </View>
            <Text style={editProfileScreenStyle.nickname}>
              RealVoice 평가하기
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={editProfileScreenStyle.settingBtn}
            onPress={handleHelp}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon
                name="help-outline"
                style={editProfileScreenStyle.iconCalendar}
              />
            </View>
            <Text style={editProfileScreenStyle.nickname}>도움 받기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={editProfileScreenStyle.settingsOtherBtn}
            onPress={handleInformation}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon
                name="error-outline"
                style={editProfileScreenStyle.iconCalendar}
              />
            </View>
            <Text style={editProfileScreenStyle.nickname}>정보</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={editProfileScreenStyle.logoutContainer}
          onPress={handleLogout}>
          <Text style={editProfileScreenStyle.logoutText}>로그아웃</Text>
        </TouchableOpacity>
        <Text style={editProfileScreenStyle.version}>Version 0.1</Text>
      </View>
    </View>
  );
};

export default EditProfileScreen;