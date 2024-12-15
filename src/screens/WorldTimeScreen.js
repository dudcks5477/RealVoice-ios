import React, {useState, useEffect, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../contexts/UserContext';

import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';
import profileScreenStyle from '../styles/profileScreenStyle';
import editProfileScreenStyle from '../styles/editProfileScreenStyle';
import worldTimeScreenStyle from '../styles/worldTimeScreenStyle';

import {countryToRegionMap} from '../utils/countryToRegionMap';

const WorldTimeScreen = ({route}) => {
  const navigation = useNavigation();
  const {userData} = useContext(UserContext);
  const [selectedTimeZone, setSelectedTimeZone] = useState(null);
  const [isSaveButtonEnabled, setIsSaveButtonEnabled] = useState(false);

  useEffect(() => {
    // 하드코딩으로 KR로 설정 추후 SignUpPhone에서 국가코드 받아와야함
    const countryCode = route.params?.countryCode || 'KR';
    const region = countryToRegionMap[countryCode];
    if (region) {
      setSelectedTimeZone(region);
      setIsSaveButtonEnabled(false);
    }
  }, [route.params?.countryCode]);

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const handleTimeZoneSelection = timeZone => {
    setSelectedTimeZone(timeZone);
    setIsSaveButtonEnabled(true);
  };

  const handleSave = () => {
    console.log(`Seleted Time Zone: ${selectedTimeZone}`);
    // 저장 로직 추가 필요
  };

  return (
    <View style={Common.container}>
      <View style={mainScreenStyle.header}>
        <TouchableOpacity
          style={mainScreenStyle.iconContainer}
          onPress={handleEditProfile}>
          <View style={profileScreenStyle.headerBack}>
            <Icon name="arrow-back" style={profileScreenStyle.icon} />
            <Text style={profileScreenStyle.headerText}>시간명</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={worldTimeScreenStyle.EditBtnContainer}>
        <View style={editProfileScreenStyle.actionContainer}>
          <Text style={worldTimeScreenStyle.containerText}>
            낮 동안에 RealVoice 알림을 받으려면 시간대를 선택하세요.{'\n'}
            시간대를 변경하시면, 현재의 모든 RealVoice가 삭제됩니다.{'\n'}
            시간대는 하루 한 번만 변경할 수 있어요.
          </Text>
          <TouchableOpacity
            style={[
              editProfileScreenStyle.settingAlertBtn,
              selectedTimeZone === '북/남미' && {backgroundColor: '#1752EA'},
            ]}
            onPress={() => handleTimeZoneSelection('북/남미')}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon name="public" style={editProfileScreenStyle.iconCalendar} />
            </View>
            <Text style={editProfileScreenStyle.nickname}>북/남미</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              editProfileScreenStyle.settingBtn,
              selectedTimeZone === '유럽' && {backgroundColor: '#1752EA'},
            ]}
            onPress={() => handleTimeZoneSelection('유럽')}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon name="public" style={editProfileScreenStyle.iconCalendar} />
            </View>
            <Text style={editProfileScreenStyle.nickname}>유럽</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              editProfileScreenStyle.settingBtn,
              selectedTimeZone === '서아시아' && {backgroundColor: '#1752EA'},
            ]}
            onPress={() => handleTimeZoneSelection('서아시아')}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon name="public" style={editProfileScreenStyle.iconCalendar} />
            </View>
            <Text style={editProfileScreenStyle.nickname}>서아시아</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              editProfileScreenStyle.settingsOtherBtn,
              selectedTimeZone === '동아시아' && {backgroundColor: '#1752EA'},
            ]}
            onPress={() => handleTimeZoneSelection('동아시아')}>
            <View style={mainScreenStyle.buttonContainer}>
              <Icon name="public" style={editProfileScreenStyle.iconCalendar} />
            </View>
            <Text style={editProfileScreenStyle.nickname}>동아시아</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[
            worldTimeScreenStyle.logoutContainer,
            {backgroundColor: isSaveButtonEnabled ? 'white' : '#606060'},
          ]}
          onPress={handleSave}
          disabled={!isSaveButtonEnabled}>
          <Text style={worldTimeScreenStyle.logoutText}>저장</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WorldTimeScreen;