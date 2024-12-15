// components/FriendDeleteItem.js
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';
import mainScreenStyle from '../styles/mainScreenStyle';

const FriendDeleteItem = ({friendName, onDelete}) => {
  const handleDelete = () => {
    onDelete(friendName);
  };

  return (
    <View style={addFriendsScreenStyle.addFriendContainer}>
      <View style={mainScreenStyle.buttonContainer}>
        <TouchableOpacity
          style={addFriendsScreenStyle.circle}
          onPress={() => console.log('Profile clicked for', friendName)}>
          <Text style={addFriendsScreenStyle.button}>
            {friendName.charAt(0).toUpperCase()}
          </Text>
        </TouchableOpacity>
        <View style={addFriendsScreenStyle.nickNameContainer}>
          <Text style={addFriendsScreenStyle.Invited}>{friendName}</Text>
          <Text style={addFriendsScreenStyle.nickName}>
            {friendName.toLowerCase()}
          </Text>
        </View>
      </View>
      <View style={addFriendsScreenStyle.addCancelBtn}>
        <TouchableOpacity
          style={addFriendsScreenStyle.cancelBtn}
          onPress={handleDelete}>
          <Icon name="cancel" style={addFriendsScreenStyle.cancelIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FriendDeleteItem;