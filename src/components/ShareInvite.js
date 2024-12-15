import React from 'react';
import {View, Text, TouchableOpacity, Share} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';
import mainScreenStyle from '../styles/mainScreenStyle';

const ShareInvite = ({firstLetter}) => {
  const handleShare = async () => {
    const shareOptions = {
      message: '당신의 RealVoice를 친구들에게 공유하세요', // 공유할 메시지
    };

    try {
      const result = await Share.share(shareOptions);
      console.log(result.action);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <TouchableOpacity style={addFriendsScreenStyle.share} onPress={handleShare}>
      <View style={addFriendsScreenStyle.shareContainer}>
        <View style={mainScreenStyle.buttonContainer}>
          <View style={mainScreenStyle.circle}>
            <Text style={mainScreenStyle.button}>{firstLetter}</Text>
          </View>
        </View>
        <View>
          <Text style={addFriendsScreenStyle.Invited}>RealVoice 초대</Text>
          <Text style={addFriendsScreenStyle.nickName}>realvoice</Text>
        </View>
        <View style={addFriendsScreenStyle.shareIconContainer}>
          <Icon name="share" style={addFriendsScreenStyle.shareIcon} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ShareInvite;