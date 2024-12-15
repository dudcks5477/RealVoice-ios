import React, {useEffect, useState} from 'react';
import {View, Text, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SplashScreenStyles from '../styles/splashScreenStyle';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [fadeAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SignUpPhoneNumber');
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