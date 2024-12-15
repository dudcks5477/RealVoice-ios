import React from 'react';
import {View, Text, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import alertSettingScreenStyle from '../styles/alertSettingScreenStyle';

const AlertSettingItem = ({iconName, text, value, onValueChange}) => {
  return (
    <View style={alertSettingScreenStyle.slideContainer}>
      <View style={alertSettingScreenStyle.iconTextContainer}>
        <Icon name={iconName} style={alertSettingScreenStyle.icon} />
        <Text style={alertSettingScreenStyle.alternateText}>{text}</Text>
      </View>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={value ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  );
};

export default AlertSettingItem;