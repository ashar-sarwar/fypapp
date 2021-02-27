import React from 'react';
import {View, Image as RnImage} from 'react-native';
import {Text} from '../../components';
import styles from './VoiceRecorderStyles';
import {TouchableOpacity} from 'react-native';
export default function VoiceRecorderView(props) {
  const {
    recordSecs,
    recordTime,
    currentPositionSec,
    currentDurationSec,
    playTime,
    duration,
    onStartRecord,
    onStopRecord,
    onStartPlay,
    onPausePlay,
    onStopPlay,
  } = props;
  console.log({recordSecs});
  console.log({recordTime});
  console.log({currentDurationSec});
  console.log({currentPositionSec});

  console.log({playTime});
  console.log({duration});

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onStartRecord}>
        <Text>start</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onStopRecord}>
        <Text>stop</Text>
      </TouchableOpacity>
    </View>
  );
}
