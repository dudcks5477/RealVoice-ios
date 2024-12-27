import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, Alert, Linking, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../../contexts/UserContext';
import Common from '../../styles/common';
import voicePermissionScreenStyle from '../../styles/voicePermissionScreenStyle';
import {requestNotificationPermission, requestAudioPermission} from '../../utils/permissions'; // 유틸리티 파일 import
import PermissionsAndroid from 'react-native/Libraries/PermissionsAndroid/PermissionsAndroid'; // Android 권한 추가
import axios from 'axios'; // axios import
import {API_URL} from '@env'; // API_URL import

const VoicePermissionScreen = () => {
  const [isAllowPressed, setIsAllowPressed] = useState(false);
  const navigation = useNavigation();
  const {userData} = useContext(UserContext);

  const handleAllow = async () => {
    setIsAllowPressed(true);

    if (Platform.OS === 'android') {
      try {
        // Android에서 알림 권한 요청
        // const notificationGranted = await PermissionsAndroid.request(
        //   PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        //   {
        //     title: '알림 권한 요청',
        //     message: 'RealVoice에서 알림을 표시하도록 허용하시겠습니까?',
        //     buttonPositive: '허용하기',
        //     buttonNegative: '허용하지 않기',
        //   },
        // );
        
        // if (notificationGranted === PermissionsAndroid.RESULTS.GRANTED) {
        //   console.log('알림 권한이 허용되었습니다.');
        // } else {
        //   console.log('알림 권한이 거부되었습니다.');
        //   Alert.alert(
        //     '알림 권한 거부됨',
        //     '알림 권한이 거부되었습니다. 설정에서 알림 권한을 활성화해야 RealVoice의 모든 기능을 사용할 수 있습니다.',
        //     [
        //       {text: '취소', style: 'cancel'},
        //       {text: '설정으로 이동', onPress: () => Linking.openSettings()},
        //     ],
        //   );
        // }

        // Android에서 녹음 권한 요청
        const audioGranted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: '마이크 권한 요청',
            message: 'RealVoice에서 음성을 녹음하도록 허용하시겠습니까?',
            buttonPositive: '허용하기',
            buttonNegative: '허용하지 않기',
          },
        );

        if (audioGranted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('녹음 권한이 허용되었습니다.');

          const response = await axios.post(`${API_URL}/user/voice/register`, {
            userUuid: userData.userUuid,
            callingCode: userData.callingCode,
            phoneNumber: userData.phoneNumber,
            nickName: userData.nickName,
            realName: userData.realName,
            countryName: userData.countryName,
            bio: userData.bio,
            joinYear: userData.joinYear,
            createTime: userData.createTime,
          });

          console.log('유저 데이터가 성공적으로 저장되었습니다:', response.data);

          navigation.navigate('Main');
        } else {
          console.log('녹음 권한이 거부되었습니다.');
          Alert.alert(
            '녹음 권한 거부됨',
            '녹음 권한이 거부되었습니다. RealVoice의 모든 기능을 사용하려면 녹음 권한을 활성화해야 합니다.',
            [
              {text: '취소', style: 'cancel'},
              {text: '설정으로 이동', onPress: () => Linking.openSettings()},
            ],
          );
        }
      } catch (err) {
        console.warn('Android 권한 요청 중 에러 발생:', err);
      }
    } else if (Platform.OS === 'ios') {
      try {
        // iOS에서 알림 권한 요청
        // await requestNotificationPermission();

        // iOS에서 녹음 권한 요청
        await requestAudioPermission();

        // 유저 데이터를 서버에 전송하는 코드 추가
        const response = await axios.post(`${API_URL}/user/voice/register`, {
          userUuid: userData.userUuid,
          callingCode: userData.callingCode,
          phoneNumber: userData.phoneNumber,
          nickName: userData.nickName,
          realName: userData.realName,
          countryName: userData.countryName,
          bio: userData.bio,
          joinYear: userData.joinYear,
          createTime: createTime,
        });

        console.log('유저 데이터가 성공적으로 저장되었습니다:', response.data);
        navigation.navigate('Main');
      } catch (error) {
        console.warn('권한 요청 중 에러 발생:', error.message);

        if (error.response) {
          console.log('서버 응답 데이터:', error.response.data);
          console.log('서버 응답 상태 코드:', error.response.status);
          console.log('서버 응답 헤더:', error.response.headers);
        } else if (error.request) {
          console.log('요청은 보내졌으나 응답이 없습니다:', error.request);
        } else {
          console.log('에러를 발생시킨 요청 설정:', error.config);
        }
      }
    }

    setIsAllowPressed(false);
  };

  const handleDeny = () => {
    console.log('허용하지 않기 버튼을 눌렀습니다.');
    Alert.alert('사용하지 않기 버튼을 누르면 RealVoice를 이용할 수 없습니다.');
  };

  const allowButtonStyle = isAllowPressed ? {backgroundColor: '#2a55ee'} : null;

  return (
    <View style={Common.container}>
      <Text style={voicePermissionScreenStyle.headerText}>
        RealVoice를 언제{'\n'} 들려주실껀가요
      </Text>
      <Text style={voicePermissionScreenStyle.subText}>
        RealVoice를 들려줄 시간을 알 수 있는 유일한 방법은,{'\n'}녹음을 활성화
        하는 것 뿐이에요!
      </Text>
      <View style={voicePermissionScreenStyle.permissionContaine}>
        <Text style={voicePermissionScreenStyle.permissionHeaderText}>
          녹음을 활성화 해주세요.
        </Text>
        <Text style={voicePermissionScreenStyle.permissionText}>
          하루에 한 번 RealVoice를 들려줄 시간을{'\n'}알려주는 녹음과 알림을 제외하면
          {'\n'}즐길 수 없어요.
        </Text>
        <View style={voicePermissionScreenStyle.permitBtn}>
          <TouchableOpacity
            onPress={handleAllow}
            style={[
              voicePermissionScreenStyle.permitBtnItem,
              allowButtonStyle,
            ]}>
            <Text style={voicePermissionScreenStyle.permit}>허용하기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleDeny}
            style={voicePermissionScreenStyle.permitBtnItem}>
            <Text style={voicePermissionScreenStyle.permitNegative}>
              허용하지 않기
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default VoicePermissionScreen;
