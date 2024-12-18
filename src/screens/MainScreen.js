import React, {useState, useEffect, useContext} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {API_URL} from '@env';
import Common from '../styles/common';

import HeaderMain from '../components/HeaderMain';
import RandomImageSection from '../components/RandomImageSection';
import {UserContext} from '../contexts/UserContext';

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

const MainScreen = () => {
  const {userData, setUserData} = useContext(UserContext);
  const [userName, setUserName] = useState(userData.nickName || 'realVoice');
  const [randomImage, setRandomImage] = useState(getRandomImage());
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserInfo = async uuid => {
      console.log('사용자 UUID:', userData.uuid);
      try {
        const response = await axios.get(`${API_URL}/user/profile/${uuid}`);
        console.log('User info fetched successfully:', response.data);
        console.log('요청 URL:', `${API_URL}/user/profile/${userData.userUuid}`);

        if (response.data && response.data.nickName) {
          setUserName(response.data.nickName);
          setUserData(prevData => ({
            ...prevData,
            nickName: response.data.nickName,
          }));
        } else {
          console.warn('No nickName found in response:', response.data);
        }
      } catch (error) {
        console.error(
          '사용자 정보 가져오기 오류:',
          error.response || error.message || error,
        );
      }
    };
    if (userData.uuid) {
      fetchUserInfo(userData.uuid);
    }
  }, [userData.uuid, setUserData]);

  const firstLetter = userName ? userName.charAt(0).toUpperCase() : '';

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  const handleRecord = () => {
    navigation.navigate('Record');
  };

  return (
    <View style={Common.container}>
      <HeaderMain firstLetter={firstLetter} handleProfile={handleProfile} />
      <RandomImageSection
        randomImage={randomImage}
        userName={userName}
        handleRecord={handleRecord}
      />
    </View>
  );
};

export default MainScreen;