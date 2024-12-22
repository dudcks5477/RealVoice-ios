import React, {useState, useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../contexts/UserContext';

import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';
import profileScreenStyle from '../styles/profileScreenStyle';
import memorySettingScreenStyle from '../styles/memorySettingScreenStyle';
import alertSettingScreenStyle from '../styles/alertSettingScreenStyle';
import profileEditDetailScreenStyle from '../styles/profileEditDetailScreenStyle';

import AlertSettingItem from '../components/AlertSettingItem';

const AlertSettingScreen = () => {
  const {userData} = useContext(UserContext);
  const navigation = useNavigation();
  const [isEnabledSpeakingTag, setIsEnabledSpeakingTag] = useState(true);
  const [isEnabledFriendRequest, setIsEnabledFriendRequest] = useState(true);
  const [isEnabledRealComments, setIsEnabledRealComments] = useState(true);
  const [isEnabledFriendPosts, setIsEnabledFriendPosts] = useState(true);
  const [isSaveEnabled, setIsSaveEnabled] = useState(false);

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  useEffect(() => {
    if (
      isEnabledSpeakingTag &&
      isEnabledFriendRequest &&
      isEnabledRealComments &&
      isEnabledFriendPosts
    ) {
      setIsSaveEnabled(false);
    } else {
      setIsSaveEnabled(true);
    }
  }, [
    isEnabledSpeakingTag,
    isEnabledFriendRequest,
    isEnabledRealComments,
    isEnabledFriendPosts,
  ]);

  return (
    <View style={Common.container}>
      <View style={mainScreenStyle.header}>
        <TouchableOpacity
          style={mainScreenStyle.iconContainer}
          onPress={handleEditProfile}>
          <View style={profileScreenStyle.headerBack}>
            <Icon name="arrow-back" style={profileScreenStyle.icon} />
            <Text style={profileScreenStyle.headerText}>알림</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={memorySettingScreenStyle.mainTextContainer}>
        <Text style={alertSettingScreenStyle.text}>
          RealVoice에서는 푸시 알림을 제어할 수 있습니다.{'\n'}
          수신할 알림 유형을 선택할 수 있습니다.
        </Text>
      </View>
      <View style={alertSettingScreenStyle.InformationContainer}>
        <AlertSettingItem
          iconName="alternate-email"
          text="말하기와 태그"
          value={isEnabledSpeakingTag}
          onValueChange={setIsEnabledSpeakingTag}
        />
        <AlertSettingItem
          iconName="people"
          text="친구 요청"
          value={isEnabledFriendRequest}
          onValueChange={setIsEnabledFriendRequest}
        />
        <AlertSettingItem
          iconName="record-voice-over"
          text="RealComments"
          value={isEnabledRealComments}
          onValueChange={setIsEnabledRealComments}
        />
        <AlertSettingItem
          iconName="local-post-office"
          text="친구들 포스트"
          value={isEnabledFriendPosts}
          onValueChange={setIsEnabledFriendPosts}
        />
        <TouchableOpacity
          style={[
            alertSettingScreenStyle.saveBtnContainer,
            {backgroundColor: isSaveEnabled ? '#fff' : '#606060'},
          ]}
          onPress={handleEditProfile}
          disabled={!isSaveEnabled}>
          <Text style={profileEditDetailScreenStyle.saveBtnText}>저장</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AlertSettingScreen;