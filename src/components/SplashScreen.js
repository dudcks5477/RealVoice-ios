import React, {useEffect, useState} from 'react';
import {View, Text, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SplashScreenStyles from '../styles/splashScreenStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [fadeAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    const checkUserStatus = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken) {
          navigation.navigate('Main');
        } else {
          console.log(userToken);
          navigation.navigate('SignUpPhoneNumber');
        }
      } catch (error) {
        console.error('Error checking user status:', error);
        navigation.navigate('SignUpPhoneNumber');
      }
    }
    const timer = setTimeout(() => {
      checkUserStatus();
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

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