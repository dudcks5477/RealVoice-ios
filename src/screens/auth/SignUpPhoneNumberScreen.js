import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CountryPicker from 'react-native-country-picker-modal';
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
    if (userData.phoneNumber.trim() === '') {
      Alert.alert('전화번호를 입력하세요.');
      return;
    }
    setIsVerificationActive(true);
  };

  const handleVerifyCode = () => {
    if (verificationCode.trim().length < 6) {
      Alert.alert('유효한 인증 코드를 입력하세요.');
      return;
    }
    Alert.alert('인증 성공!');
    navigation.navigate('NickName');
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
