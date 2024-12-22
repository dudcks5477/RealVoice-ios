import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CountryPicker from 'react-native-country-picker-modal';
import auth from '@react-native-firebase/auth';
import Common from '../../styles/common';
import signUpPhoneNumberScreenStyle from '../../styles/signUpPhoneNumberScreenStyle';

const SignUpPhoneNumberScreen = ({ userData, setUserData }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('KR');
  const [countryName, setCountryName] = useState('KOREA');
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [isVerificationActive, setIsVerificationActive] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerificationCodeValid, setIsVerificationCodeValid] = useState(false);
  const [verificationId, setVerificationId] = useState(null); // 인증 ID 저장
  const navigation = useNavigation();

  const handlePhoneNumberChange = (text) => {
    const cleanText = text.replace(/[^0-9]/g, '');
    setUserData(prevState => ({
      ...prevState,
      phoneNumber: cleanText,
    }));
    setPhoneNumber(cleanText);
    setIsPhoneNumberValid(cleanText.length === 11); // Assuming 11 digits for Korean phone numbers
  };

  const handleCountrySelect = (country) => {
    const callingCode = `+${country.callingCode[0]}`;
    const name = country.name;
    setUserData(prevState => ({
      ...prevState,
      callingCode,
      countryName: name,
    }));
    setCountryCode(country.cca2);
    setCountryName(name);
  };

  const handleSignUp = async () => {
    try {
      if (!userData.phoneNumber.trim()) {
        Alert.alert('전화번호를 입력하세요.');
        return;
      }

      const fullPhoneNumber = `${userData.callingCode}${userData.phoneNumber}`;
      const confirmation = await auth().signInWithPhoneNumber(fullPhoneNumber); // Firebase 인증번호 요청

      setVerificationId(confirmation.verificationId); // Firebase 인증 ID 저장
      setIsVerificationActive(true);
      console.log(userData);
      Alert.alert('인증번호가 발송되었습니다.');
    } catch (error) {
      console.error(error);
    // Firebase 에러 코드에 맞는 메시지 처리
    if (error.code === 'auth/too-many-requests') {
      Alert.alert('인증 요청이 너무 많습니다. 잠시 후 다시 시도해주세요.');
    } else if (error.code === 'auth/invalid-phone-number') {
      Alert.alert('잘못된 전화번호 형식입니다.');
    } else {
      Alert.alert('인증번호 요청에 실패했습니다.', error.message);
    }
  }
};

  const handleVerifyCode = async () => {
    try {
    if (verificationCode.trim().length < 6) {
      Alert.alert('유효한 인증 코드를 입력하세요.');
      return;
    }

    const credential = auth.PhoneAuthProvider.credential(
      verificationId,
      verificationCode
    );
    await auth().signInWithCredential(credential); // Firebase 인증 완료

    // 인증 성공 시 userData에 저장
    setUserData(prevState => ({
      ...prevState,
      phoneNumber,
      callingCode: '',
      countryName,
    }));

    Alert.alert('인증 성공!');
    navigation.navigate('NickName');
  } catch (error) {
    console.error(error);
    // Firebase 인증 오류 처리
    if (error.code === 'auth/invalid-verification-code') {
      Alert.alert('잘못된 인증번호입니다. 다시 확인해주세요.');
    } else {
      Alert.alert('인증에 실패했습니다.', error.message);
    }
  }
};

  const handleVerificationCodeChange = (text) => {
    setVerificationCode(text);
    setIsVerificationCodeValid(text.trim().length === 6);
  };

  return (
    <View style={Common.container}>
      <Text style={Common.headerText}>전화번호가 어떻게 되세요?</Text>
      <View style={signUpPhoneNumberScreenStyle.content}>
        <View style={signUpPhoneNumberScreenStyle.phoneNumberContainer}>
          <CountryPicker
            countryCode={countryCode}
            withFilter
            withFlag
            withCallingCode
            withCountryNameButton={false}
            withAlphaFilter={false}
            onSelect={handleCountrySelect}
            containerButtonStyle={signUpPhoneNumberScreenStyle.countryPicker}
          />
          <TextInput
            style={signUpPhoneNumberScreenStyle.phoneNumber}
            onChangeText={handlePhoneNumberChange}
            value={phoneNumber}
            placeholder="01012345678"
            placeholderTextColor="#aaa"
            keyboardType="phone-pad"
            maxLength={15}
          />
        </View>

        {isVerificationActive && (
          <TextInput
            style={signUpPhoneNumberScreenStyle.verificationCode}
            onChangeText={handleVerificationCodeChange}
            value={verificationCode}
            placeholder='인증 코드를 입력하세요.'
            placeholderTextColor="#aaa"
            keyboardType='number-pad'
            maxLength={6}
          />
        )}

        {!isVerificationActive && (
          <Text style={signUpPhoneNumberScreenStyle.text}>
            전화번호 입력은 당사 서비스 약관 및 개인정보 보호정책에 동의하는
            {'\n'} 것입니다. 감사합니다.
          </Text>
        )}
      </View>
      <View style={Common.nextBtnContainer}>
        <TouchableOpacity
          style={[
            Common.nextBtn,
            { opacity: (isVerificationActive ? isVerificationCodeValid : isPhoneNumberValid) ? 1 : 0.5 },
          ]}
          onPress={isVerificationActive ? handleVerifyCode : handleSignUp}
          disabled={isVerificationActive ? !isVerificationCodeValid : !isPhoneNumberValid}
        >
          <Text style={Common.nextBtnText}>{isVerificationActive ? '확인' : '다음'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpPhoneNumberScreen;
