import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import profileScreenStyle from '../../styles/profileScreenStyle';

const CalendarButton = ({day, isToday}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setTimeout(() => {
        setIsPlaying(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isPlaying]);

  return (
    <TouchableOpacity onPress={togglePlayPause}>
      <View
        style={[
          profileScreenStyle.calenderBtn,
          isToday && profileScreenStyle.todayCircle,
        ]}>
        <Text style={profileScreenStyle.calenderDay}>{day}</Text>
        <Icon
          name={isPlaying ? 'pause' : 'play-arrow'}
          style={profileScreenStyle.iconPlay}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CalendarButton;