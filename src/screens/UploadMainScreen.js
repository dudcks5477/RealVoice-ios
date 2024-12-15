import React, {useContext} from 'react';
import {View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../contexts/UserContext';

import Common from '../styles/common';
import HeaderMain from '../components/HeaderMain';
import VoiceItem from '../components/VoiceItem';
import {RecordingContext} from '../services/RecordingContext';

const UploadMainScreen = () => {
  const {recordings} = useContext(RecordingContext);
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

  return (
    <View style={Common.container}>
      <HeaderMain firstLetter={firstLetter} handleProfile={handleProfile} />
      <ScrollView style={{flex: 1}}>
        {recordings.map((recording, index) => (
          <VoiceItem
            key={index}
            firstLetter={firstLetter}
            nickName={recording.nickName || 'unknown'} // 데이터에 따라 변경
            audioUri={recording.audioUri}
            handleUserProfile={handleUserProfile}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default UploadMainScreen;