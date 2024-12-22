import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import axios from 'axios';
import {API_URL} from '@env';
import Icon from '@react-native-vector-icons/material-icons';
import {useNavigation} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {UserContext} from '../contexts/UserContext';

import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';
import profileScreenStyle from '../styles/profileScreenStyle';
import profileEditDetailScreenStyle from '../styles/profileEditDetailScreenStyle';

const images = [
  require('../assets/random/mountain.jpg'),
  require('../assets/random/nature.jpg'),
  require('../assets/random/river.jpg'),
  require('../assets/random/sea.jpg'),
  require('../assets/random/space.jpg'),
  require('../assets/random/temple.jpg'),
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const ProfileEditDetailScreen = () => {
  const [randomImage, setRandomImage] = useState(getRandomImage());
  const [profileImage, setProfileImage] = useState(null);
  const {userData, setUserData} = useContext(UserContext);
  const [nickName, setNickName] = useState('');
  const [realName, setRealName] = useState('');
  const [bio, setBio] = useState('당신의 진실한 목소리를 들려주세요.');
  const [countryName, setCountryName] = useState('KOREA');
  const [isModified, setIsModified] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (userData) {
      setNickName(userData.nickName || '');
      setRealName(userData.realName || '');
      setBio(userData.bio || '당신의 진실한 목소리를 들려주세요');
      setCountryName(userData.countryName || '');
    }
  }, [userData]);

  useEffect(() => {
    const hasChanges =
      nickName !== (userData?.nickName || '') ||
      realName !== (userData?.realName || '') ||
      bio !== (userData?.bio || '당신의 진실한 목소리를 들려주세요') ||
      countryName !== (userData?.countryName || '');

    setIsModified(hasChanges);
  }, [nickName, realName, bio, countryName, userData]);

  const handleChangeProfile = () => {
    Alert.alert(
      '프로필 사진 업데이트',
      '사진을 선택하세요',
      [
        {
          text: '카메라',
          onPress: () =>
            launchCamera({mediaType: 'photo'}, response => {
              if (response.didCancel) {
                console.log('User canceled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else {
                setProfileImage(response.assets[0].uri);
              }
            }),
        },
        {
          text: '갤러리',
          onPress: () =>
            launchImageLibrary({mediaType: 'photo'}, response => {
              if (response.didCancel) {
                console.log('User canceled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else {
                setProfileImage(response.assets[0].uri);
              }
            }),
        },
        {
          text: '취소',
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  };

  const handleEditProfile = async () => {
    try {
      const response = await axios.post(`${API_URL}/user/profile/updateNickname`, {
        userUuid: userData.uuid,
        beforeNickname: userData.nickName,
        afterNickname: nickName
      });

      if (response.status === 200) {
        Alert.alert('성공', '프로필이 성공적으로 업데이트되었습니다.');
        setUserData(prevData => ({
          ...prevData,
          nickName,
        }));
        navigation.navigate('EditProfile');
      } else {
        Alert.alert('실패', '프로필 업데이트에 실패했습니다.');
      }
    } catch (error) {
      console.error('프로필 업데이트 오류:', error.message || error);
      Alert.alert('오류', '프로필 업데이트 중 문제가 발생했습니다.');
    }
  };

  return (
    <View style={Common.container}>
      <Image
        source={profileImage ? {uri: profileImage} : randomImage}
        style={profileScreenStyle.image}
      />
      <View style={mainScreenStyle.header}>
        <TouchableOpacity
          style={mainScreenStyle.iconContainer}
          onPress={() => navigation.goBack()}>
          <View style={profileScreenStyle.headerBack}>
            <Icon name="arrow-back" style={profileScreenStyle.icon} />
            <Text style={profileScreenStyle.headerText}>프로필 수정</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={profileEditDetailScreenStyle.bottomTextContainer}>
        <TouchableOpacity
          style={profileEditDetailScreenStyle.textContainer}
          onPress={handleChangeProfile}>
          <Icon name="camera" style={profileEditDetailScreenStyle.iconCamera} />
          <Text style={profileEditDetailScreenStyle.bottomText}>
            프로필 사진 업데이트
          </Text>
        </TouchableOpacity>
      </View>
      <View style={profileEditDetailScreenStyle.InformationContainer}>
        {/* 닉네임 */}
        <View style={profileEditDetailScreenStyle.nickname}>
          <Text style={profileEditDetailScreenStyle.userName}>사용자명</Text>
          <TextInput
            style={profileEditDetailScreenStyle.userNameInput}
            value={nickName}
            onChangeText={setNickName}
          />
        </View>
        {/* 사용자 이름 */}
        <View style={profileEditDetailScreenStyle.nickname}>
          <Text style={profileEditDetailScreenStyle.userName}>사용자 이름</Text>
          <TextInput
            style={profileEditDetailScreenStyle.userNameInput}
            value={realName}
            onChangeText={setRealName}
          />
        </View>
        {/* 소개 */}
        <View style={profileEditDetailScreenStyle.nickname}>
          <Text style={profileEditDetailScreenStyle.userName}>소개</Text>
          <TextInput
            style={profileEditDetailScreenStyle.userNameInput}
            value={bio}
            onChangeText={setBio}
          />
        </View>
        {/* 위치 */}
        <View style={profileEditDetailScreenStyle.nickname}>
          <Text style={profileEditDetailScreenStyle.userName}>위치</Text>
          <TextInput
            style={profileEditDetailScreenStyle.userNameInput}
            value={countryName}
            onChangeText={setCountryName}
          />
        </View>
        <TouchableOpacity
          style={[
            profileEditDetailScreenStyle.saveBtnContainer,
            {backgroundColor: isModified ? '#fff' : '#606060'},
          ]}
          onPress={handleEditProfile}
          disabled={!isModified}>
          <Text style={profileEditDetailScreenStyle.saveBtnText}>저장</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileEditDetailScreen;
