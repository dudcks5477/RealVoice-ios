import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../contexts/UserContext';

import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';
import addFriendsScreenStyle from '../styles/AddFriendsScreenStyle';
import recordScreenStyle from '../styles/recordScreenStyle';

const images = [
  require('../assets/random/mountain.jpg'),
  require('../assets/random/nature.jpg'),
  require('../assets/random/river.jpg'),
  require('../assets/random/sea.jpg'),
  require('../assets/random/space.jpg'),
  require('../assets/random/temple.jpg'),
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const RecordScreen = () => {
  const navigation = useNavigation();
  const {userData} = useContext(UserContext);
  const [randomImage, setRandomImage] = useState(getRandomImage());

  const handleMain = () => {
    navigation.navigate('Main');
  };

  const handleRecording = () => {
    navigation.navigate('Recording', {startImmediately: true});
  };
  return (
    <View style={Common.container}>
      <View>
        <View style={mainScreenStyle.header}>
          <TouchableOpacity
            style={mainScreenStyle.iconContainer}
            onPress={handleMain}>
            <Icon name="arrow-back" style={mainScreenStyle.icon} />
          </TouchableOpacity>
          <Text style={mainScreenStyle.headerText}>RealVoice</Text>
          <View style={addFriendsScreenStyle.iconContainer}>
            <Icon name="group" style={addFriendsScreenStyle.iconNone} />
          </View>
        </View>
        <View style={recordScreenStyle.container}>
          <Image source={randomImage} style={recordScreenStyle.image} />
          <View style={recordScreenStyle.timerContainer}>
            <Text style={recordScreenStyle.timer}>00:03</Text>
            <TouchableOpacity
              style={recordScreenStyle.timerBtn}
              onPress={handleRecording}>
              <Icon name="mic" style={recordScreenStyle.icon} />
            </TouchableOpacity>
            <Text style={recordScreenStyle.timerText}>
              최대 3초까지 가능합니다.
            </Text>
          </View>
          <Text style={recordScreenStyle.descriptText}>
            탭하여 첫 번째 RealVoicec를 들려주세요. 친구에게만 표시됩니다.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RecordScreen;