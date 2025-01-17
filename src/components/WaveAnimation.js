import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Animated, {useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated';

const WaveAnimation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const waveHeight = useSharedValue(2); // 초기 높이

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: waveHeight.value, // 애니메이션으로 변경되는 높이
      transform: [{scaleY: waveHeight.value}],
    };
  });

  const handlePlayPause = () => {
    setIsPlaying(prev => !prev);
    waveHeight.value = withTiming(isPlaying ? 2 : 10, {duration: 500}); // 크기 변경 애니메이션
  };

  return (
    <View style={styles.container}>
      <View style={styles.waveContainer}>
        {/* 파형 */}
        <Animated.View style={[styles.wave, animatedStyle]} />
      </View>
      {/* 재생/정지 버튼 */}
      <TouchableOpacity style={styles.button} onPress={handlePlayPause}>
        <View style={styles.circle} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    flex: 1,
  },
  waveContainer: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wave: {
    backgroundColor: '#fff',
    width: '100%',
    height: 2, // 초기 높이
  },
  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#2a55ee',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
});

export default WaveAnimation;
