import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  Alert,
  Linking,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {API_URL} from '@env';
import {UserContext} from '../../contexts/UserContext';
import Common from '../../styles/common';
import voicePermissionScreenStyle from '../../styles/voicePermissionScreenStyle';

const VoicePermissionScreen = () => {
  const [isAllowPressed, setIsAllowPressed] = useState(false);
  const navigation = useNavigation();
  const {userData} = useContext(UserContext);

  const handleAllow = async () => {
    setIsAllowPressed(true);

    if (Platform.OS === 'android' && Platform.Version >= 33) {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
          {
            title: '알림 권한 요청',
            message: 'RealVoice에서 알림을 표시하도록 허용하시겠습니까?',
            buttonPositive: '허용하기',
            buttonNegative: '허용하지 않기',
          },
        );

        console.log('권한 요청 결과:', granted);

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('알림 권한이 허용되었습니다.');
        } else {
          console.log('알림 권한이 거부되었습니다.');
          Alert.alert(
            '알림 권한 거부됨',
            '알림 권한이 거부되었습니다. 설정에서 알림 권한을 활성화해야 RealVoice의 모든 기능을 사용할 수 있습니다.',
            [
              {text: '취소', style: 'cancel'},
              {text: '설정으로 이동', onPress: () => Linking.openSettings()},
            ],
          );
        }
      } catch (err) {
        console.warn('권한 요청 중 에러 발생:', err);
      }
    }
    try {
      const response = await axios.post(`${API_URL}/user/voice/register`, {
        userUuid: userData.userUuid,
        callingCode: userData.callingCode,
        phoneNumber: userData.phoneNumber,
        nickName: userData.nickName,
        realName: userData.realName,
        countryName: userData.countryName,
        bio: userData.bio,
        joinYear: userData.joinYear,
      });
      console.log('유저 데이터가 성공적으로 저장되었습니다.:', response.data);
      navigation.navigate('Main');
    } catch (error) {
      console.error(
        `유저 데이터 저장 중 에러 발생 (URL: ${API_URL}/user/voice/register):`,
        error,
      );
    } finally {
      setIsAllowPressed(false);
    }
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
        RealVoice를 들려줄 시간을 알 수 있는 유일한 방법은,{'\n'}알림을 활성화
        하는 것 뿐이에요!
      </Text>
      <View style={voicePermissionScreenStyle.permissionContaine}>
        <Text style={voicePermissionScreenStyle.permissionHeaderText}>
          알림을 활성화 해주세요.
        </Text>
        <Text style={voicePermissionScreenStyle.permissionText}>
          하루에 한 번 RealVoice를 들려줄 시간을{'\n'}알려주는 알림을 제외하면
          모든 알람은{'\n'}무음이에요.
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