import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
  const [nickName, setNickName] = useState('');
  const [realName, setRealName] = useState('');
  const [bio, setBio] = useState('당신의 진실한 목소리를 들려주세요.');
  const [countryName, setCountryName] = useState('KOREA');
  const navigation = useNavigation();
  const {userData, setUser} = useContext(UserContext);

  useEffect(() => {
    if (userData) {
      setNickName(userData.nickName || '');
      setRealName(userData.realName || '');
      setBio(userData.bio || '당신의 진실한 목소리를 들려주세요');
      setCountryName(userData.countryName || '');
    }
  }, [userData]);

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
                console.log('User canceled image pikcer');
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

  const handleEditProfile = () => {
    setUser({
      ...userData,
      nickName: nickName,
      realName: realName,
      bio: bio,
      country: countryName,
    });
    navigation.navigate('EditProfile');
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
          onPress={handleEditProfile}>
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
            onChange={setCountryName}
          />
        </View>
        <TouchableOpacity
          style={profileEditDetailScreenStyle.saveBtnContainer}
          onPress={handleEditProfile}>
          <Text style={profileEditDetailScreenStyle.saveBtnText}>저장</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileEditDetailScreen;