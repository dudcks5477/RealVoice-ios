import React from 'react';
import {Text, View} from 'react-native';
import profileScreenStyle from '../../styles/profileScreenStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CalendarButton from './CalendarButton';

const getLast20Days = () => {
  const dates = [];
  const today = new Date(2024, 6, 1); // 5월은 JavaScript에서 4로 표기 (0부터 시작하기 때문)
  for (let i = 0; i < 20; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date);
  }
  return dates;
};

const splitDatesIntoRows = dates => {
  const rows = [];
  for (let i = 0; i < dates.length; i += 5) {
    rows.push(dates.slice(i, i + 5));
  }
  return rows;
};

const UserMemorizeSection = ({isPlaying, togglePlayPause}) => {
  const dates = getLast20Days();
  const rows = splitDatesIntoRows(dates);
  const today = new Date().getDate();

  return (
    <View style={profileScreenStyle.userMemorizeContainer}>
      <View style={profileScreenStyle.memorizeHeader}>
        <Text style={profileScreenStyle.memorizeFix}>회원님의 추억들</Text>
        <View style={profileScreenStyle.memorizeHeader}>
          <Icon name="lock" style={profileScreenStyle.iconLock} />
          <Text style={profileScreenStyle.country}>당신에게만 보입니다.</Text>
        </View>
      </View>
      <View style={profileScreenStyle.calenderContainer}>
        <Text style={profileScreenStyle.calenderHeader}>지난 20일들</Text>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={profileScreenStyle.row}>
            {row.map((date, colIndex) => {
              return (
                <CalendarButton
                  key={colIndex}
                  day={date.getDate()}
                  isPlaying={isPlaying}
                  onPress={togglePlayPause}
                  isToday={date.getDate() === today} // 오늘 날짜 확인
                />
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
};

export default UserMemorizeSection;