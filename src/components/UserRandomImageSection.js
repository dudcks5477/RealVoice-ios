import React from 'react';
import {Image} from 'react-native';
import profileScreenStyle from '../styles/mainScreenStyle';

const RandomImageSection = ({randomImage}) => {
  return <Image source={randomImage} style={profileScreenStyle.image} />;
};

export default RandomImageSection;