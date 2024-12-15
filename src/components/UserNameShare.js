import React from 'react';
import {View, Text, TouchableOpacity, Share} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import profileScreenStyle from '../styles/profileScreenStyle';

const UserNameShare = ({nickname}) => {
  const handleShare = async () => {
    const shareOptions = {
      message: '당신의 RealVoice를 친구들에게 공유하세요',
    };

    try {
      const result = await Share.share(shareOptions);
      console.log(result.action);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <View style={profileScreenStyle.bottomTextContainer}>
      <Text style={profileScreenStyle.bottomText}>{nickname}</Text>
      <TouchableOpacity onPress={handleShare}>
        <Icon name="share" style={profileScreenStyle.iconShare} />
      </TouchableOpacity>
    </View>
  );
};

export default UserNameShare;