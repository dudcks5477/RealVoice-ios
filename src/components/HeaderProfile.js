import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import mainScreenStyle from '../styles/mainScreenStyle';
import profileScreenStyle from '../styles/profileScreenStyle';

const HeaderProfile = ({handleUploadMain, handleEditProfile, nickname}) => {
  return (
    <View style={mainScreenStyle.header}>
      <TouchableOpacity
        style={mainScreenStyle.iconContainer}
        onPress={handleUploadMain}>
        <View style={profileScreenStyle.headerBack}>
          <Icon name="arrow-back" style={profileScreenStyle.icon} />
          <Text style={profileScreenStyle.headerText}>{nickname}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={mainScreenStyle.buttonContainer}
        onPress={handleEditProfile}>
        <Icon name="more-vert" style={profileScreenStyle.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderProfile;