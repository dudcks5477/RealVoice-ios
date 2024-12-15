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

const InformationScreen = () => {
  const navigation = useNavigation();
  const {userData} = useContext(UserContext);
  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
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
                name="article"
                style={editProfileScreenStyle.iconCalendar}
              />
            </View>
            <Text style={editProfileScreenStyle.nickname}>이용약관</Text>
          </TouchableOpacity>
        </View>
        <View style={editProfileScreenStyle.actionContainer}>
          <TouchableOpacity style={editProfileScreenStyle.actionBtn}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon
                name="assignment-ind"
                style={editProfileScreenStyle.iconCalendar}
              />
            </View>
            <Text style={editProfileScreenStyle.nickname}>
              개인정보처리방침
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default InformationScreen;