import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../contexts/UserContext';

import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';
import profileScreenStyle from '../styles/profileScreenStyle';
import alertSettingScreenStyle from '../styles/alertSettingScreenStyle';
import privcayScreenStyle from '../styles/privacyScreenStyle';

import AlertSettingItem from '../components/AlertSettingItem';

const PrivacyScreen = () => {
  const navigation = useNavigation();
  const {userData} = useContext(UserContext);
  const [isEnabledWorld, setIsEnabledWorld] = useState(false);
  const [isEnabledPhone, setIsEnabledPhone] = useState(false);
  const [isEnabledSync, setIsEnabledSync] = useState(false);

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };
  const handleBlocked = () => {
    navigation.navigate('Blocked');
  };
  const handleHided = () => {
    navigation.navigate('Hided');
  };

  return (
    <View style={Common.container}>
      <View style={mainScreenStyle.header}>
        <TouchableOpacity
          style={mainScreenStyle.iconContainer}
          onPress={handleEditProfile}>
          <View style={profileScreenStyle.headerBack}>
            <Icon name="arrow-back" style={profileScreenStyle.icon} />
            <Text style={profileScreenStyle.headerText}>개인정보 보호</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={privcayScreenStyle.InformationContainer}>
        <TouchableOpacity
          style={alertSettingScreenStyle.slideContainer}
          onPress={handleBlocked}>
          <View style={alertSettingScreenStyle.iconTextContainer}>
            <Icon name="block" style={alertSettingScreenStyle.icon} />
            <Text style={alertSettingScreenStyle.alternateText}>
              차단된 사용자
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={alertSettingScreenStyle.slideContainer}
          onPress={handleHided}>
          <View style={alertSettingScreenStyle.iconTextContainer}>
            <Icon name="visibility-off" style={alertSettingScreenStyle.icon} />
            <Text style={alertSettingScreenStyle.alternateText}>
              숨겨진 사용자
            </Text>
          </View>
        </TouchableOpacity>
        <View style={privcayScreenStyle.btnContainer}>
          <AlertSettingItem
            iconName="public"
            text="We are the world"
            value={isEnabledWorld}
            onValueChange={setIsEnabledWorld}
          />
          <Text style={privcayScreenStyle.btnDescript}>
            활성화하면 전 세계 RealVoice를 서로 확인할 수 있어요.
          </Text>
        </View>
        <View style={privcayScreenStyle.btnContainer}>
          <AlertSettingItem
            iconName="phone-android"
            text="내 전화번호로 찾기"
            value={isEnabledPhone}
            onValueChange={setIsEnabledPhone}
          />
          <Text style={privcayScreenStyle.btnDescript}>
            다른 사람이 내 휴대전화 번호로 나를 찾을 수 있도록 허용하면{'\n'}
            친구들이 회원님의 휴대전화 번호로 회원님을 찾을 수 있습니다.
          </Text>
        </View>
        <View style={privcayScreenStyle.btnContainer}>
          <AlertSettingItem
            iconName="sync"
            text="연락처 동기화"
            value={isEnabledSync}
            onValueChange={setIsEnabledSync}
          />
          <Text style={privcayScreenStyle.btnDescript}>
            연락처 동기화는 휴대전화 연락처에서 친구를 추천해 줍니다.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PrivacyScreen;