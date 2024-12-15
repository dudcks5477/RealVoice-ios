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

const HelpChooseScreen = () => {
  const navigation = useNavigation();
  const {userData} = useContext(UserContext);

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };
  const handleHelp = () => {
    navigation.navigate('Help');
  };

  return (
    <View style={Common.container}>
      <View style={mainScreenStyle.header}>
        <TouchableOpacity
          style={mainScreenStyle.iconContainer}
          onPress={handleHelp}>
          <View style={profileScreenStyle.headerBack}>
            <Icon name="arrow-back" style={profileScreenStyle.icon} />
            <Text style={profileScreenStyle.headerText}>문의하기</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* 웹 페이지로 이동 */}
      <View style={worldTimeScreenStyle.EditBtnContainer}>
        <View style={editProfileScreenStyle.actionContainer}>
          <TouchableOpacity style={editProfileScreenStyle.actionBtn}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon
                name="question-mark"
                style={editProfileScreenStyle.iconCalendar}
              />
            </View>
            <Text style={editProfileScreenStyle.nickname}>질문하기</Text>
            <View style={helpScreenStyle.arrowIconContainer}>
              <Icon
                name="keyboard-arrow-right"
                style={helpScreenStyle.iconCalendar}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={editProfileScreenStyle.actionContainer}>
          <TouchableOpacity style={editProfileScreenStyle.actionBtn}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon
                name="bug-report"
                style={editProfileScreenStyle.iconCalendar}
              />
            </View>
            <Text style={editProfileScreenStyle.nickname}>문제보고</Text>
            <View style={helpScreenStyle.arrowIconContainer}>
              <Icon
                name="keyboard-arrow-right"
                style={helpScreenStyle.iconCalendar}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={editProfileScreenStyle.actionContainer}>
          <TouchableOpacity style={editProfileScreenStyle.actionBtn}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon
                name="feedback"
                style={editProfileScreenStyle.iconCalendar}
              />
            </View>
            <Text style={editProfileScreenStyle.nickname}>피드백</Text>
            <View style={helpScreenStyle.arrowIconContainer}>
              <Icon
                name="keyboard-arrow-right"
                style={helpScreenStyle.iconCalendar}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={editProfileScreenStyle.actionContainer}>
          <TouchableOpacity style={editProfileScreenStyle.actionBtn}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon
                name="message"
                style={editProfileScreenStyle.iconCalendar}
              />
            </View>
            <Text style={editProfileScreenStyle.nickname}>메시지</Text>
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

export default HelpChooseScreen;