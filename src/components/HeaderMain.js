import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import mainScreenStyle from '../styles/mainScreenStyle';

const HeaderMain = ({firstLetter, handleProfile}) => {
  const navigation = useNavigation();

  const handleAddFriends = () => {
    navigation.navigate('AddFriends');
  };

  return (
    <View style={mainScreenStyle.header}>
      <TouchableOpacity
        style={mainScreenStyle.iconContainer}
        onPress={handleAddFriends}>
      </TouchableOpacity>
      <Text style={mainScreenStyle.headerText}>RealVoice</Text>
      <TouchableOpacity
        style={mainScreenStyle.buttonContainer}
        onPress={handleProfile}>
        <View style={mainScreenStyle.circle}>
          <Text style={mainScreenStyle.button}>{firstLetter}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderMain;