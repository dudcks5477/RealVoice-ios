import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Common from '../../styles/common';
import nickNameScreenStyle from '../../styles/nickNameScreenStyle';
import {API_URL} from '@env';

const NickNameScreen = ({ userData, setUserData }) => {
  const [nickName, setNickName] = useState(userData.nickName || '');
  const [isChecking, setIsChecking] = useState(false); // 중복 체크 진행 중 상태
  const [isDuplicate, setIsDuplicate] = useState(false); // 중복 여부 상태
  const navigation = useNavigation();

  const isEnglish = /^[a-z]+$/; // 영소문자 검사 정규식

  // 닉네임 변경 핸들러
  const handleNickNameChange = text => {
    if (isEnglish.test(text) || text === '') {
      setNickName(text);
      setUserData(prevState => ({
        ...prevState,
        nickName: text,
      }));

      if (text.length >= 2) {
       checkNickNameAvailability (text); // 백엔드 함수 호출
      } else {
        setIsDuplicate(false); // 2글자 미만 시 중복 여부 초기화
      }
    } else {
      Alert.alert('소문자로만 입력해주세요.');
    }
  };
  
  // 실제 API 호출 (백엔드 연결 시 사용)
  // const checkNickNameAvailability = async nickName => {
  //   try {
  //     setIsChecking(true); // 로딩 상태 시작
  //     console.log(`Calling API: ${API_URL}/user/nickname/${nickName}`);
  //     const response = await fetch(`${API_URL}/user/nickname/${nickName}`, {
  //       method: 'GET',
  //       credentials: 'include',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       }
  //     });
  //     const data = await response.text();
  //     console.log(data)

  //     if (response.ok) {
  //       if (data.trim === '사용 가능한 닉네임 입니다') {
  //         setIsDuplicate(false);
  //       } else {
  //         setIsDuplicate(true);
  //       }
  //     } else {
  //       Alert.alert('서버와 통신 중 문제가 발생했습니다.');
  //     }
  //   } catch (error) {
  //     Alert.alert('네트워크 오류가 발생했습니다.');
  //     console.warn('권한 요청 중 에러 발생:', error.message);

  //       if (error.response) {
  //         console.log('서버 응답 데이터:', error.response.data);
  //         console.log('서버 응답 상태 코드:', error.response.status);
  //         console.log('서버 응답 헤더:', error.response.headers);
  //       } else if (error.request) {
  //         console.log('요청은 보내졌으나 응답이 없습니다:', error.request);
  //       } else {
  //         console.log('에러를 발생시킨 요청 설정:', error.config);
  //       }
  //   } finally {
  //     setIsChecking(false); // 로딩 상태 종료
  //   }
  // };

  // 다음 버튼 클릭 핸들러
  const handleNextPress = () => {
    if (isDuplicate) {
      Alert.alert('닉네임이 중복됩니다. 다른 닉네임을 입력해주세요.');
    } else {
      navigation.navigate('VoicePermission');
    }
  };

  const isNickNameValid = nickName.length >= 2 && !isDuplicate;

  return (
    <View style={Common.container}>
      <Text style={Common.headerText}>당신을 뭐라 부를까요?</Text>
      <View style={nickNameScreenStyle.inputContainer}>
        <TextInput
          style={nickNameScreenStyle.input}
          placeholder="Real Voice"
          onChangeText={handleNickNameChange}
          value={nickName}
        />
        {isChecking && <ActivityIndicator size="small" color="#0000ff" />}
        {isDuplicate && (
          <Text style={[Common.text, { color: 'red' }]}>중복된 닉네임 입니다</Text>
        )}
        {!isDuplicate && nickName.length >= 2 && !isChecking && (
          <Text style={[Common.text, { color: 'green' }]}>사용 가능한 닉네임 입니다</Text>
        )}
        <Text style={[Common.text, { marginTop: 10 }]}>
          두 글자 이상 영소문자를 입력하세요{'\n'}
          언제든지 변경할 수 있습니다
        </Text>
      </View>
      <View style={nickNameScreenStyle.nextBtnContainer}>
        <TouchableOpacity
          style={[
            nickNameScreenStyle.nextBtn,
            { opacity: isNickNameValid ? 1 : 0.5 },
          ]}
          onPress={handleNextPress}
          disabled={!isNickNameValid}>
          <Text style={nickNameScreenStyle.nextBtnText}>다음</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NickNameScreen;
