import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Common from '../styles/common';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../contexts/UserContext';
import axios from 'axios';
import {API_URL} from '@env';

import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';
import requiredScreenStyle from '../styles/requiredScreenStyle';

import Header from '../components/Header';
import Search from '../components/Search';
import ShareInvite from '../components/ShareInvite';
import FriendItem from '../components/FriendItem';

const RequiredScreen = () => {
  const navigation = useNavigation();
  const {userData} = useContext(UserContext);
  const userName = userData.username || 'realVoice';
  const firstLetter = userName.charAt(0).toUpperCase();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([
    // {id: 1, name: 'Black Widow', username: 'Natasha Roamnoff'},
    // {id: 2, name: 'Ivan Vanko', username: ''},
    // {id: 3, name: 'Spider Man', username: 'Peter Parker'},
    // {id: 4, name: 'Anoton Vanko', username: ''},
  ]);

  const handleMain = () => {
    navigation.navigate('Main');
  };

  const handleUserProfile = friendId => {
    navigation.navigate('UserProfile', {id: friendId});
  };

  const handleAddFriends = () => {
    navigation.navigate('AddFriends');
  };

  const handleFriends = () => {
    navigation.navigate('Friends');
  };

  const handleRequired = () => {
    navigation.navigate('Required');
  };

  const handleSendRequestFriend = () => {
    navigation.navigate('SendRequestFriend');
  };

  const handleSearchFriends = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/friends/search`, {
        params: {query: searchQuery},
      });
      if (response.status === 200) {
        setSearchResults(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddFriend = async friendId => {
    try {
      // const response = await axios.post(`${API_URL}/api/friends/add`, {
      //   userId: userName,
      //   friendId: friendId,
      // });
      // if (response.status === 200) {
      //   console.log(`Added friend with id ${friendId}`);
      // }
      console.log(`Added friend with id ${friendId}`);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteFriend = friendId => {
    setSearchResults(prevResults =>
      prevResults.filter(friend => friend.id !== friendId),
    );
  };

  return (
    <View style={Common.container}>
      <Header onMain={handleMain} />
      <ScrollView styles={{flex: 1}}>
        <Search
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearchFriends}
        />
        <ShareInvite firstLetter={firstLetter} />

        <View style={addFriendsScreenStyle.recommand}>
          <View style={requiredScreenStyle.recommandContainer}>
            <Text style={addFriendsScreenStyle.recommandText}>친구 요청</Text>
            <Text style={requiredScreenStyle.space} />
            <TouchableOpacity onPress={handleSendRequestFriend}>
              <Text style={addFriendsScreenStyle.recommandText}>보냄 &gt;</Text>
            </TouchableOpacity>
          </View>
        </View>

        {searchResults.length > 0 ? (
          <View style={requiredScreenStyle.friendContainer}>
            {searchResults.map(result => (
              <FriendItem
                key={result.id}
                friend={result}
                onAdd={handleAddFriend}
                onProfile={handleUserProfile}
                onDelete={handleDeleteFriend} // 삭제 함수 전달
              />
            ))}
          </View>
        ) : (
          <View style={addFriendsScreenStyle.share}>
            <View style={requiredScreenStyle.shareContainer}>
              <View style={requiredScreenStyle.requestContainer}>
                <Text style={requiredScreenStyle.requestHeaderText}>
                  보류 중인 요청 없음
                </Text>
                <Text style={requiredScreenStyle.requestSubText}>
                  보류 중인 요청이 없습니다.
                </Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
      <View style={addFriendsScreenStyle.recommand}>
        <View style={addFriendsScreenStyle.selectFooter}>
          <TouchableOpacity
            style={addFriendsScreenStyle.textMore}
            onPress={handleAddFriends}>
            <Text style={addFriendsScreenStyle.footerText}>추천</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={addFriendsScreenStyle.textMore}
            onPress={handleFriends}>
            <Text style={addFriendsScreenStyle.footerText}>친구들</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={addFriendsScreenStyle.textRecommandContainer}
            onPress={handleRequired}>
            <Text style={addFriendsScreenStyle.footerText}>요청</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RequiredScreen;