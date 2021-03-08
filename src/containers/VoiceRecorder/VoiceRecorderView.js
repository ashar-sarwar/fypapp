import React from 'react';
import {View, Image as RnImage} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
    <LinearGradient
      colors={['#002286', '#f8446f']}
      start={{x: 1.1, y: -1.2}}
      end={{x: -3.3, y: -0.9}}
      style={styles.container}>
      <View style={AppStyles.mTop25}>
        <Text
          size={Fonts.size.xxLarge}
          style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>
          COVID COUGH RECORDER
        </Text>
      </View>
      <View
        style={{
          marginTop: Metrics.doubleBaseMargin,
          flex: 1,
          alignItems: 'center',
        }}>
        <Text style={{top: 10, color: 'white'}}>{`${recordTime}`}</Text>

        <TouchableOpacity
          onPress={onStartRecord}
          style={[styles.buttonWrap, {borderWidth: 2, marginTop: 20}]}>
          <Text style={styles.btnText} type="semiBold">
            Start Recorder
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onStopRecord}
          style={[styles.buttonWrap, {borderWidth: 2}]}>
          <Text style={styles.btnText} type="semiBold">
            Stop Recorder
          </Text>
        </TouchableOpacity>

        <Text
          style={{top: 12, color: 'white'}}>{`${playTime} / ${duration}`}</Text>

        <TouchableOpacity
          onPress={onStartPlay}
          style={[
            styles.buttonWrap,
            {borderWidth: 2, marginTop: Metrics.doubleBaseMargin},
          ]}>
          <Text style={styles.btnText} type="semiBold">
            Start Player
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onStopPlay}
          style={[styles.buttonWrap, {borderWidth: 2}]}>
          <Text style={styles.btnText} type="semiBold">
            Stop Player
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
