import React from 'react';
import {View, Image as RnImage, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from '../../components';
import styles from './VoiceRecorderStyles';
import {Fonts, AppStyles, Metrics, Images} from '../../theme';
import {Actions} from 'react-native-router-flux';
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
    handleVoiceRecording,
    setValue,
    showPlayButton,
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
      <TouchableOpacity onPress={() => Actions.drawerOpen()}>
        <RnImage source={Images.BaselineIcon} style={{width: 27, height: 27}} />
      </TouchableOpacity>
      <View style={[AppStyles.mTop25, {paddingHorizontal: Metrics.baseMargin}]}>
        <Text
          size={Fonts.size.xxxLarge}
          style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>
          COVID COUGH TESTER
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <View
          style={[
            AppStyles.flex,
            {
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: Metrics.doubleBaseMargin,
            },
          ]}>
          <TouchableOpacity
            onPress={() => {
              setValue(
                {isIconActive: !props.isIconActive},
                handleVoiceRecording(),
              );
            }}
            style={{
              opacity: props.isIconActive ? 0.4 : 1,
              backgroundColor: 'red',
              borderRadius: 100,
              height: 160,
              width: 160,
              alignItems: 'center',
            }}>
            <RnImage
              source={Images.RecordIcon}
              style={{width: 70, height: 70, top: 50}}
              tintColor={'white'}
            />
          </TouchableOpacity>
          <Text
            style={{top: 10, color: 'white'}}
            size={Fonts.size.xxLarge}
            type={'semiBold'}>{`${recordTime}`}</Text>

          {/* <TouchableOpacity
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
        </TouchableOpacity> */}

          {/* <Text
          style={{top: 12, color: 'white'}}>{`${playTime} / ${duration}`}</Text> */}

          {/* <TouchableOpacity
          onPress={onStartPlay}
          style={[
            styles.buttonWrap,
            {borderWidth: 2, marginTop: Metrics.doubleBaseMargin},
          ]}>
          <Text style={styles.btnText} type="semiBold">
            Start Player
          </Text>
        </TouchableOpacity> */}
        </View>

        <LinearGradient
          colors={['#00FF00', '#006400', 'transparent', 'transparent']}
          start={{x: 1.8, y: 0.9}}
          end={{x: -3.9, y: -0.1}}
          style={[AppStyles.mBottom20, {borderRadius: 10, borderWidth: 2}]}>
          <TouchableOpacity
            disabled={!(showPlayButton && recordSecs === 0)}
            onPress={onStartPlay}
            style={[
              !(showPlayButton && recordSecs === 0) && {opacity: 0.3},
              {
                width: Metrics.screenWidth / 1.2,
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}>
            <Text
              style={[styles.btnText, {color: 'white'}]}
              type="semiBold"
              size={Fonts.size.xLarge}>
              Play
            </Text>
          </TouchableOpacity>
        </LinearGradient>

        <View style={AppStyles.mBottom25}>
          <TouchableOpacity style={[styles.buttonWrap, {borderWidth: 2}]}>
            <Text
              style={styles.btnText}
              type="semiBold"
              size={Fonts.size.medium}>
              Diagnose
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
