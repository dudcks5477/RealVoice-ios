import React, {useEffect, useContext} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../contexts/UserContext';

import Common from '../styles/common';
import HeaderMain from '../components/HeaderMain';
import VoiceItem from '../components/VoiceItem';
import {RecordingContext} from '../services/RecordingContext';

const UploadMainScreen = () => {
  const {recordings, fetchRecordingByUUID} = useContext(RecordingContext);
  const {userData} = useContext(UserContext);
  const firstLetter = userData.nickName
    ? userData.nickName.charAt(0).toUpperCase()
    : '';
  const navigation = useNavigation();

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  const handleUserProfile = () => {
    navigation.navigate('UserProfile');
  };

  useEffect(() => {
    if (userData.userUuid) {
      fetchRecordingByUUID(userData.userUuid);
    }
  }, [userData.userUuid]);

  return (
    <View style={Common.container}>
      <HeaderMain firstLetter={firstLetter} handleProfile={handleProfile} />
      <ScrollView style={{flex: 1}}>
        {recordings && Array.isArray(recordings) ? (
          recordings.map((recording, index) => (
            <VoiceItem
              key={index}
              firstLetter={firstLetter}
              userName={userData.nickName || 'unknown'} // 데이터에 따라 변경
              audioUri={recording.audioUri}
              handleUserProfile={handleUserProfile}
            />
          ))
        ) : (
          <Text style={{color: '#fff'}}>No recordings available</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default UploadMainScreen;