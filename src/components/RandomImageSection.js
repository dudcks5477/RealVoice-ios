import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import mainScreenStyle from '../styles/mainScreenStyle';

const RandomImageSection = ({randomImage, userName, handleRecord}) => {
  return (
    <View style={mainScreenStyle.mainContainer}>
      <Image source={randomImage} style={mainScreenStyle.image} />
      <View style={mainScreenStyle.textContainer}>
        <Text style={mainScreenStyle.imageText}>헤이 {userName}님</Text>
        <Text style={mainScreenStyle.subImageText}>
          준비됐어요? RealVoice할 시간입니다
        </Text>
        <TouchableOpacity
          style={mainScreenStyle.voiceBtn}
          onPress={handleRecord}>
          <Text style={mainScreenStyle.buttonText}>
            RealVoice를 포스트하세요
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RandomImageSection;