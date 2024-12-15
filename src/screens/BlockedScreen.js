import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../contexts/UserContext';
import {API_URL} from '@env';
import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';
import profileScreenStyle from '../styles/profileScreenStyle';
import alertSettingScreenStyle from '../styles/alertSettingScreenStyle';
import privcayScreenStyle from '../styles/privacyScreenStyle';
import BlockedScreenStyle from '../styles/blockedScreenStyle';

import FriendItem from '../components/FriendItem';
import requiredScreenStyle from '../styles/requiredScreenStyle';

const BlockedScreen = () => {
  const navigation = useNavigation();
  const {userData} = useContext(UserContext);

  const [searchResults, setSearchResults] = useState([
    {id: 1, name: 'Captain America', username: 'Steve Rogers'},
    {id: 2, name: 'Red Skull', username: 'Johann Schmidt'},
    {id: 3, name: 'Agent 13', username: 'Peggy Carter'},
    {id: 4, name: 'Winter Soldier', username: 'Bucky Barnes'},
    {id: 5, name: 'Arnim Zola', username: ''},
  ]);

  const handlePrivacy = () => {
    navigation.navigate('Privacy');
  };

  const handleUserProfile = friendId => {
    navigation.navigate('UserProfile', {id: friendId});
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
      <View style={mainScreenStyle.header}>
        <TouchableOpacity
          style={mainScreenStyle.iconContainer}
          onPress={handlePrivacy}>
          <View style={profileScreenStyle.headerBack}>
            <Icon name="arrow-back" style={profileScreenStyle.icon} />
            <Text style={profileScreenStyle.headerText}>차단된 사용자</Text>
          </View>
        </TouchableOpacity>
      </View>

      {searchResults.length > 0 ? (
        <View style={requiredScreenStyle.friendContainer}>
          {searchResults.map(result => (
            <FriendItem
              key={result.id}
              friend={result}
              onAdd={handleAddFriend}
              onProfile={handleUserProfile}
              onDelete={handleDeleteFriend}
            />
          ))}
        </View>
      ) : (
        <View style={privcayScreenStyle.InformationContainer}>
          <View style={BlockedScreenStyle.slideContainer}>
            <View style={alertSettingScreenStyle.iconTextContainer}>
              <Text style={BlockedScreenStyle.alternateText}>
                차단된 프로필이 없습니다.
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default BlockedScreen;