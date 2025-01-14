import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from '@react-native-vector-icons/material-icons';
import RNFetchBlob from 'rn-fetch-blob';
import Sound from 'react-native-sound';
import Animated, {useSharedValue, useAnimatedStyle, withTiming, Easing, withRepeat} from 'react-native-reanimated';
import uploadMainScreenStyle from '../styles/uploadMainScreenStyle';
import mainScreenStyle from '../styles/mainScreenStyle';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import voiceItemStyle from '../styles/voiceItemStyle';

const audioRecorderPlayer = new AudioRecorderPlayer();

const VoiceItem = ({firstLetter, userName, audioUri, handleUserProfile}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [playingId, setPlayingId] = useState(null);

  const users = [];

  // 애니메이션 값 설정
  const waveScaleX = useSharedValue(1);
  const waveScaleY = useSharedValue(1);

  useEffect(() => {
    Sound.setCategory('Playback', true);
  }, []);

  useEffect(() => {
    if (!isPlaying) {
      waveScaleX.value = withTiming(1, {duration: 500, easing: Easing.linear});
      waveScaleY.value = withTiming(1, {duration: 500, easing: Easing.linear});
    } else {
      waveScaleX.value = withRepeat(
        withTiming(1.5, {duration: 500, easing: Easing.inOut(Easing.ease)}),
        -1,
        true
      );
      waveScaleY.value = withRepeat(
        withTiming(1.2, {duration: 500, easing: Easing.inOut(Easing.ease)}),
        -1,
        true
      );
    }
  }, [isPlaying]);

  const playAudio = async (audioUri) => {
    if (!audioUri) {
      console.error('audioUri가 제공되지 않았습니다.');
      return;
    }
  
    const filePath = audioUri.startsWith('file://') ? audioUri.replace('file://', '') : audioUri;

    const fileExists = await RNFetchBlob.fs.exists(filePath);
    if (!fileExists) {
      console.error('파일이 존재하지 않습니다:', filePath);
      return;
    }
  
    const sound = new Sound(filePath, '', (error) => {
      if (error) {
        console.error('Sound 초기화 실패', error);
        return;
      }
  
      sound.play((success) => {
        if (success) {
          console.log('Sound 재생 성공');
        } else {
          console.error('Sound 재생 실패');
        }
        sound.release();
      });
    });
  };

  const waveStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {scaleX: waveScaleX.value}, // X 방향 애니메이션 적용
        {scaleY: waveScaleY.value}, // Y 방향 애니메이션 적용
      ]
    };
  });

  const togglePlayPause = () => {
    if (isPlaying) {
      console.log('재생 중단 로직 실행')
      setIsPlaying(false);
      setPlayingId(null);
    } else {
      console.log('playAudio 호출, audioUri:', audioUri);
      playAudio(audioUri);
      setIsPlaying(true);
      setPlayingId(firstLetter);
    }
  };

  useEffect(() => {
    let timer;
    if (playingId !== null) {
      timer = setTimeout(() => {
        setPlayingId(null);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [playingId]);

  const renderUserItem = ({item}) => (
    <TouchableOpacity
      style={mainScreenStyle.buttonContainer}
      onPress={() => togglePlayPause(item)}>
      <View style={uploadMainScreenStyle.circle}>
        <Text style={uploadMainScreenStyle.button}>{item.firstLetter}</Text>
        <Icon
          name={playingId === item.id ? 'pause' : 'play-arrow'}
          style={uploadMainScreenStyle.icon}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={uploadMainScreenStyle.uploadedContainer}>
      <View style={uploadMainScreenStyle.voiceContainer}>
        <Text style={uploadMainScreenStyle.userName}>{userName}</Text>
        <View style={uploadMainScreenStyle.voiceRow}>
          <TouchableOpacity
            style={mainScreenStyle.buttonContainer}
            onPress={handleUserProfile}>
            <View style={uploadMainScreenStyle.circle}>
              <Text style={uploadMainScreenStyle.button}>{firstLetter}</Text>
            </View>
          </TouchableOpacity>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {isPlaying && playingId === firstLetter ? (
              <Animated.View style={[uploadMainScreenStyle.wave, waveStyle]} />
            ) : (
              <View style={uploadMainScreenStyle.wave} />
            )}
          </View>
          <TouchableOpacity
            style={uploadMainScreenStyle.timerBtn}
            onPress={(togglePlayPause)}>
            <Icon
              name={playingId === firstLetter ? 'pause' : 'play-arrow'}
              style={uploadMainScreenStyle.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={{color: '#fff'}}>보이스를 남긴 사람 + {users.length}</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={voiceItemStyle.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={voiceItemStyle.modalContent}>
                <FlatList
                  data={users}
                  renderItem={renderUserItem}
                  keyExtractor={item => item.id}
                  horizontal={true}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};
export default VoiceItem;