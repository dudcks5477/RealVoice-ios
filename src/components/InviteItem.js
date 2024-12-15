import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';
import mainScreenStyle from '../styles/mainScreenStyle';

const InviteItem = ({firstLetter, name, username, phoneNumber}) => {
  const handleInvite = () => {
    const message =
      'RealVoice에 초대합니다. 친구들과 자신의 RealVoice를 공유하세요!';

    Linking.openURL(`sms:${phoneNumber}&body=${message}`);
  };
  return (
    <View style={addFriendsScreenStyle.addFriendContainer}>
      <View style={mainScreenStyle.buttonContainer}>
        <View style={addFriendsScreenStyle.circle}>
          <Text style={addFriendsScreenStyle.button}>{firstLetter}</Text>
        </View>
        <View style={addFriendsScreenStyle.nickNameContainer}>
          <Text style={addFriendsScreenStyle.Invited}>{name}</Text>
          <Text style={addFriendsScreenStyle.nickName}>{username}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={addFriendsScreenStyle.invitedFriend}
        onPress={handleInvite}>
        <Text style={addFriendsScreenStyle.addText}>초대</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InviteItem;