import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../contexts/UserContext';

import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';
import profileScreenStyle from '../styles/profileScreenStyle';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const {userData} = useContext(UserContext);

  const handleUploadMain = () => {
    navigation.navigate('UploadMain');
  };

  return (
    <View style={Common.container}>
      <Image
        source={require('../assets/random/sea.jpg')}
        style={profileScreenStyle.image}
      />
      <View style={mainScreenStyle.header}>
        <TouchableOpacity
          style={mainScreenStyle.iconContainer}
          onPress={handleUploadMain}>
          <View style={profileScreenStyle.headerBack}>
            <Icon name="arrow-back" style={profileScreenStyle.icon} />
            <Text style={profileScreenStyle.headerText}>
              {userData.username}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={profileScreenStyle.bottomTextContainer}>
        <Text style={profileScreenStyle.bottomText}>{userData.username}</Text>
        <TouchableOpacity>
          <Icon name="share" style={profileScreenStyle.iconShare} />
        </TouchableOpacity>
      </View>

      <View style={profileScreenStyle.introContainer}>
        <Text style={profileScreenStyle.introFix}>자기소개란</Text>
        <Text style={profileScreenStyle.country}>{userData.country}</Text>
        <Text style={profileScreenStyle.country}>
          N년 전에 RealVoice에 가입했습니다.
          {/* {userData.joinYear ? `${new Data().getFullYear() - userData.joinYear}년 전에 RealVoice에 가입했습니다.` : ''} */}
        </Text>
      </View>
    </View>
  );
};

export default ProfileScreen;