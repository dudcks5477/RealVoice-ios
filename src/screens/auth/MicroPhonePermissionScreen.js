import React from 'react';
import {View, Text, TouchableOpacity, PermissionsAndroid} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import Common from '../../styles/common';
import microPhonePermissionScreenStyle from '../../styles/microPhonePermissionScreenStyle';

const MicroPhonePermissionScreen = () => {
  const navigation = useNavigation();
  const handleNextPress = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: '오디오 녹음 권한 요청',
          message: 'RealVoice에서 오디오를 녹음하도록 허용하시겠습니까?',
          buttonPositive: '확인',
          buttonNegative: '취소',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        navigation.navigate('NickName');
      } else {
        console.log('오디오 녹음 권한이 거부되었습니다.');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <View style={[Common.container, microPhonePermissionScreenStyle.container]}>
      <View style={microPhonePermissionScreenStyle.iconText}>
        <Icon name="mic" size={40} color="white" />
        <Text style={microPhonePermissionScreenStyle.text}>
          마이크 활성화{'\n'}당신의 기분을 말할 수 있습니다.
        </Text>
      </View>
      <View style={microPhonePermissionScreenStyle.nextBtnContainer}>
        <TouchableOpacity
          style={microPhonePermissionScreenStyle.nextBtn}
          onPress={handleNextPress}>
          <Text style={microPhonePermissionScreenStyle.nextBtnText}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MicroPhonePermissionScreen;