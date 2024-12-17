import {Alert, Linking} from 'react-native';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions'; // 'react-native-permissions' 사용

// 알림 권한 요청
export const requestNotificationPermission = async () => {
  try {
    const result = await request(PERMISSIONS.IOS.NOTIFICATIONS); // iOS 알림 권한 요청
    if (result === RESULTS.GRANTED) {
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
  } catch (error) {
    console.warn('알림 권한 요청 중 에러 발생:', error);
  }
};

// 녹음 권한 요청
export const requestAudioPermission = async () => {
  try {
    const result = await request(PERMISSIONS.IOS.MICROPHONE); // iOS 마이크 권한 요청
    if (result === RESULTS.GRANTED) {
      console.log('녹음 권한이 허용되었습니다.');
    } else {
      console.log('녹음 권한이 거부되었습니다.');
      Alert.alert(
        '녹음 권한 거부됨',
        '녹음 권한이 거부되었습니다. RealVoice의 기능을 사용하려면 녹음 권한을 활성화해야 합니다.',
        [
          {text: '취소', style: 'cancel'},
          {text: '설정으로 이동', onPress: () => Linking.openSettings()},
        ],
      );
    }
  } catch (error) {
    console.warn('녹음 권한 요청 중 에러 발생:', error);
  }
};
