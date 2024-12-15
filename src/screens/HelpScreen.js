import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../contexts/UserContext';

import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';
import profileScreenStyle from '../styles/profileScreenStyle';
import editProfileScreenStyle from '../styles/editProfileScreenStyle';
import worldTimeScreenStyle from '../styles/worldTimeScreenStyle';
import helpScreenStyle from '../styles/helpScreenStyle';

const HelpScreen = () => {
  const navigation = useNavigation();
  const {userData} = useContext(UserContext);

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };
  const handleHelpChoose = () => {
    navigation.navigate('HelpChoose');
  };

  return (
    <View style={Common.container}>
      <View style={mainScreenStyle.header}>
        <TouchableOpacity
          style={mainScreenStyle.iconContainer}
          onPress={handleEditProfile}>
          <View style={profileScreenStyle.headerBack}>
            <Icon name="arrow-back" style={profileScreenStyle.icon} />
            <Text style={profileScreenStyle.headerText}>도움받기</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={worldTimeScreenStyle.EditBtnContainer}>
        <View style={editProfileScreenStyle.actionContainer}>
          {/* 웹 페이지로 이동 */}
          <TouchableOpacity style={editProfileScreenStyle.actionBtn}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon
                name="question-mark"
                style={editProfileScreenStyle.iconCalendar}
              />
            </View>
            <Text style={editProfileScreenStyle.nickname}>질의응답</Text>
            <View style={helpScreenStyle.arrowIconContainer}>
              <Icon
                name="keyboard-arrow-right"
                style={helpScreenStyle.iconCalendar}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={editProfileScreenStyle.actionContainer}>
          <TouchableOpacity
            style={editProfileScreenStyle.actionBtn}
            onPress={handleHelpChoose}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon
                name="mail-outline"
                style={editProfileScreenStyle.iconCalendar}
              />
            </View>
            <Text style={editProfileScreenStyle.nickname}>문의하기</Text>
            <View style={helpScreenStyle.arrowIconContainer}>
              <Icon
                name="keyboard-arrow-right"
                style={helpScreenStyle.iconCalendar}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HelpScreen;