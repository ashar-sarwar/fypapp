import React from 'react';
import {View, Image as RnImage} from 'react-native';
import {Text} from '../../components';
import styles from './VoiceRecorderStyles';
import {TouchableOpacity} from 'react-native';
import {Fonts, AppStyles, Metrics} from '../../theme';
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
      <View style={AppStyles.mTop25}>
        <Text size={Fonts.size.xxLarge} style={{textAlign: 'center'}}>
          COVID COUGH RECORDER
        </Text>
      </View>
      <View
        style={{
          marginTop: Metrics.doubleBaseMargin,
          flex: 1,
          alignItems: 'center',
        }}>
        <Text style={{top: 10}}>{`${recordTime}`}</Text>

        <TouchableOpacity onPress={onStartRecord} style={styles.buttonWrap}>
          <Text>Start Recorder</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onStopRecord} style={styles.buttonWrap}>
          <Text>Stop Recorder</Text>
        </TouchableOpacity>

        <Text style={{top: 12}}>{`${playTime} / ${duration}`}</Text>

        <TouchableOpacity onPress={onStartPlay} style={styles.buttonWrap}>
          <Text>Start Player</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onStopPlay} style={styles.buttonWrap}>
          <Text>Stop Player</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
