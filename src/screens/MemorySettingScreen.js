import React, {useState, useContext} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../contexts/UserContext';
import Common from '../styles/common';
import mainScreenStyle from '../styles/mainScreenStyle';
import profileScreenStyle from '../styles/profileScreenStyle';
import memorySettingScreenStyle from '../styles/memorySettingScreenStyle';

const MemorySettingScreen = () => {
  const [isMemoryEnabled, setIsMemoryEnabled] = useState(true);
  const navigation = useNavigation();
  const {userData} = useContext(UserContext);

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const handleToggleMemory = () => {
    const alertTitle = isMemoryEnabled
      ? '추억 기능 비활성화 및 삭제'
      : '추억 기능 활성화';
    const alertMessage = isMemoryEnabled
      ? '추억 기능을 비활성화 하시겠습니까?'
      : '추억 기능을 활성화 하시겠습니까?';
    const confirmText = isMemoryEnabled ? '비활성화 및 삭제' : '활성화';

    Alert.alert(
      alertTitle,
      alertMessage,
      [
        {
          text: confirmText,
          onPress: () => {
            setIsMemoryEnabled(!isMemoryEnabled);
            console.log(confirmText + ' 선택');
          },
        },
        {text: '취소', onPress: () => console.log('취소')},
      ],
      {cancelable: true},
    );
  };

  return (
    <View style={Common.container}>
      <View style={mainScreenStyle.header}>
        <TouchableOpacity
          style={mainScreenStyle.iconContainer}
          onPress={handleEditProfile}>
          <View style={profileScreenStyle.headerBack}>
            <Icon name="arrow-back" style={profileScreenStyle.icon} />
            <Text style={profileScreenStyle.headerText}>추억</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={memorySettingScreenStyle.mainTextContainer}>
        <Text style={memorySettingScreenStyle.headerText}>
          추억 기능이 {isMemoryEnabled ? '켜져' : '꺼져'} 있습니다.
        </Text>
        <Text style={memorySettingScreenStyle.text}>
          회원님의 모든 RealVoice들이 자동으로 회원님의 추억에{'\n'}
          추가되며, 이 RealVoice들은 회원님에게만 보입니다.
        </Text>
      </View>
      <View style={memorySettingScreenStyle.disabledContainer}>
        <View style={memorySettingScreenStyle.disabledBtnContainer}>
          <Text style={memorySettingScreenStyle.headerText}>
            추억 기능이 {isMemoryEnabled ? '켜져' : '꺼져'} 있습니다.
          </Text>
          <Text style={memorySettingScreenStyle.text}>
            {isMemoryEnabled
              ? '추억 기능을 비활성화하면, 저장되어 있던 모든 RealVoice 들이 영구적으로 삭제되며 복구가 불가능합니다. 앞으로 공유하시는 RealVoice들도 추억에 저장되지 않으며 시간이 지난 후 삭제되게 됩니다.'
              : '추억 기능을 활성화하면, 지금부터 모든 RealVoice 들이 저장됩니다. 앞으로 공유하시는 RealVoice들은 언제든지 다시 들을 수 있습니다.'}
          </Text>
          <TouchableOpacity
            style={memorySettingScreenStyle.disabledBtn}
            onPress={handleToggleMemory}>
            <Text style={memorySettingScreenStyle.disabledBtnText}>
              {isMemoryEnabled
                ? '추억 기능 비활성화 및 삭제'
                : '추억 기능 활성화'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MemorySettingScreen;