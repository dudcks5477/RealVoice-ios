import React, {useState, useEffect, useContext} from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../contexts/UserContext';
import Common from '../styles/common';
import profileScreenStyle from '../styles/profileScreenStyle';

import HeaderProfile from '../components/HeaderProfile';
import IntroSection from '../components/IntroSection';
import UserNameShare from '../components/UserNameShare';
// import UserMemorizeSection from '../components/UserMemorizeSection/UserMemorizeSection';

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

const ProfileScreen = () => {
  const navigation = useNavigation();
  const {userData} = useContext(UserContext);
  // const [isPlaying, setIsPlaying] = useState(false);
  const [randomImage, setRandomImage] = useState(getRandomImage());
  const [joinYear, setJoinYear] = useState(0);

  useEffect(() => {
    console.log('UserData:', userData);
  }, [userData]);

  const handleUploadMain = () => {
    navigation.navigate('UploadMain');
  };

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  // const togglePlayPause = () => {
  //   setIsPlaying(!isPlaying);
  // };

  // useEffect(() => {
  //   if (isPlaying) {
  //     const timer = setTimeout(() => {
  //       setIsPlaying(false);
  //     }, 3000);

  //     return () => clearTimeout(timer);
  //   }
  // }, [isPlaying]);

  return (
    <View style={Common.container}>
      <Image source={randomImage} style={profileScreenStyle.image} />
      <HeaderProfile
        handleUploadMain={handleUploadMain}
        handleEditProfile={handleEditProfile}
        nickname={userData.nickName}
      />
      <UserNameShare nickname={userData.nickName} />
      <IntroSection country={userData.countryName} joinYear={joinYear} />
      {/* <UserMemorizeSection
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
      /> */}
    </View>
  );
};

export default ProfileScreen;