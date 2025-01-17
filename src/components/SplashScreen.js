import React, {useContext, useEffect, useState} from 'react';
import {View, Text, Animated} from 'react-native';
import {API_URL} from '@env';
import {useNavigation} from '@react-navigation/native';
import SplashScreenStyles from '../styles/splashScreenStyle';
import {UserContext} from '../contexts/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const navigation = useNavigation();
  const {setUserData} = useContext(UserContext);
  const [fadeAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    if (!API_URL) {
      console.error('API_URL 환경 변수가 설정되지 않았습니다.');
      navigation.navigate('ErrorScreen');
      return;
    }

    const initializeUserData = async () => {
      try {
        // 회원가입 상태 확인
        const isRegistered = await AsyncStorage.getItem('isRegistered');
        const storedUserUuid = await AsyncStorage.getItem('userUuid');
        console.log('회원가입 상태:', isRegistered);
        console.log('저장된 userUuid 확인:', storedUserUuid);

        if (isRegistered !== 'true' || !storedUserUuid) {
          console.log('회원가입 필요: SignUpPhoneNumber로 이동');
          navigation.navigate('SignUpPhoneNumber');
          return;
        }

        // API로 사용자 정보 가져오기
        const response = await fetch(`${API_URL}/user/profile/${storedUserUuid}`);
        if (!response.ok) {
          console.error(`API 요청 실패: ${response.status} - ${response.statusText}`);
          throw new Error('가입되지 않은 사용자입니다.');
        }

        const data = await response.json();
        if (data.userUuid !== storedUserUuid) {
          console.error('API 응답 userUuid와 저장된 userUuid 불일치');
          console.log('서버 응답 데이터:', data);
          console.log('서버 응답 userUuid:', data.userUuid);
          console.log('저장된 userUuid:', storedUserUuid);
          throw new Error('Server returned a different userUuid');
        }

        // UserContext에 데이터 설정
        setUserData((prev) => ({
          ...prev,
          ...data,
        }));

        navigation.navigate('Main');
      } catch (error) {
        console.error('초기화 중 오류 발생:', error.message);
        navigation.navigate('SignUpPhoneNumber');
      }
    };

    initializeUserData();
  }, [navigation, setUserData]);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={SplashScreenStyles.container}>
      <Animated.View style={{opacity: fadeAnim}}>
        <Text style={SplashScreenStyles.text}>Real</Text>
        <Text style={SplashScreenStyles.text}>Voice</Text>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
