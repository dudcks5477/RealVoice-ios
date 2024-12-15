import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';

const Footer = ({onRecommend, onFriends, onRequired}) => {
  return (
    <View style={addFriendsScreenStyle.selectFooter}>
      <TouchableOpacity
        style={addFriendsScreenStyle.textRecommandContainer}
        onPress={onRecommend}>
        <Text style={addFriendsScreenStyle.footerText}>추천</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={addFriendsScreenStyle.textMore}
        onPress={onFriends}>
        <Text style={addFriendsScreenStyle.footerText}>친구들</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={addFriendsScreenStyle.textMore}
        onPress={onRequired}>
        <Text style={addFriendsScreenStyle.footerText}>요청</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;