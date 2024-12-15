import React from 'react';
import {View, Text} from 'react-native';
import profileScreenStyle from '../styles/profileScreenStyle';

const IntroSection = ({country, joinYear}) => {
  return (
    <View style={profileScreenStyle.introContainer}>
      <Text style={profileScreenStyle.introFix}>자기소개란</Text>
      {/* 국가 및 가입 날짜 표시 로직 필요 */}
      <Text style={profileScreenStyle.country}>{country}</Text>
      <Text style={profileScreenStyle.country}>
        {joinYear}년 전에 RealVoice에 가입했습니다.
      </Text>
    </View>
  );
};

export default IntroSection;