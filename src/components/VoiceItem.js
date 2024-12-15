import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import uploadMainScreenStyle from '../styles/uploadMainScreenStyle';
import mainScreenStyle from '../styles/mainScreenStyle';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import voiceItemStyle from '../styles/voiceItemStyle';

const audioRecorderPlayer = new AudioRecorderPlayer();

const VoiceItem = ({firstLetter, userName, audioUri, handleUserProfile}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [playingId, setPlayingId] = useState(null);

  const users = [
    // {id: '1', name: 'User 1', firstLetter: 'A', audioUri: 'audio1.mp3'},
    // {id: '2', name: 'User 2', firstLetter: 'B', audioUri: 'audio2.mp3'},
    // {id: '3', name: 'User 3', firstLetter: 'C', audioUri: 'audio3.mp3'},
    {id: '1', name: 'User 1', firstLetter: 'A'},
    {id: '2', name: 'User 2', firstLetter: 'B'},
    {id: '3', name: 'User 3', firstLetter: 'C'},
  ];

  const togglePlayPause = async item => {
    if (playingId === item.id) {
      // await audioRecorderPlayer.stopPlayer();
      setPlayingId(null);
    } else {
      if (playingId !== null) {
        // await audioRecorderPlayer.stopPlayer();
      }
      // await audioRecorderPlayer.startPlayer(item.audioUri);
      // audioRecorderPlayer.addPlayBackListener(e => {
      //   if (e.currentPosition === e.duration) {
      //     setPlayingId(null);
      //   }
      // });
      setPlayingId(item.id);
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
        <TouchableOpacity
          style={mainScreenStyle.buttonContainer}
          onPress={handleUserProfile}>
          <View style={uploadMainScreenStyle.circle}>
            <Text style={uploadMainScreenStyle.button}>{firstLetter}</Text>
          </View>
        </TouchableOpacity>
        <Text style={uploadMainScreenStyle.userName}>{userName}</Text>
        <TouchableOpacity
          style={uploadMainScreenStyle.timerBtn}
          onPress={() => setPlayingId(firstLetter)}>
          <Icon
            name={playingId === firstLetter ? 'pause' : 'play-arrow'}
            style={uploadMainScreenStyle.icon}
          />
        </TouchableOpacity>
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