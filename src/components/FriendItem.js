import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';
import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';
import mainScreenStyle from '../styles/mainScreenStyle';

const FriendItem = ({friend, onAdd, onProfile, onDelete}) => {
  const [isAdded, setIsAdded] = useState(false); // 각 친구별 추가 상태 관리
  const firstLetter = friend.name.charAt(0).toUpperCase();

  const handleAdd = () => {
    if (isAdded) {
      console.log(`Friend ${friend.id} has been removed`);
    } else {
      onAdd(friend.id);
      console.log(`Friend ${friend.id} has been added`);
    }
    setIsAdded(!isAdded); // 추가 상태 업데이트
  };

  const handleDelete = () => {
    Alert.alert(
      '친구 삭제',
      '정말로 친구를 삭제하시겠습니까?',
      [
        {
          text: '취소',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: '삭제',
          onPress: () => {
            console.log('친구 삭제됨');
            onDelete(friend.id); // 친구 삭제 함수 호출
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={addFriendsScreenStyle.addFriendContainer}>
      <View style={mainScreenStyle.buttonContainer}>
        <TouchableOpacity
          style={addFriendsScreenStyle.circle}
          onPress={() => onProfile(friend.id)}>
          <Text style={addFriendsScreenStyle.button}>{firstLetter}</Text>
        </TouchableOpacity>
        <View style={addFriendsScreenStyle.nickNameContainer}>
          <Text style={addFriendsScreenStyle.Invited}>{friend.name}</Text>
          <Text style={addFriendsScreenStyle.nickName}>{friend.username}</Text>
        </View>
      </View>
      <View style={addFriendsScreenStyle.addCancelBtn}>
        <TouchableOpacity
          style={addFriendsScreenStyle.addBtn}
          onPress={handleAdd}>
          <Text
            style={[
              addFriendsScreenStyle.addText,
              isAdded && {color: '#2a55ee'},
            ]}>
            {isAdded ? '추가됨' : '추가'}
          </Text>
        </TouchableOpacity>
        {!isAdded && (
          <TouchableOpacity
            style={addFriendsScreenStyle.cancelBtn}
            onPress={handleDelete}>
            <Icon name="cancel" style={addFriendsScreenStyle.cancelIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FriendItem;