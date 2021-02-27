import React from 'react';
import PropTypes from 'prop-types';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

import VoiceRecorderView from './VoiceRecorderView';
import {connect} from 'react-redux';
import {Platform} from 'react-native';
const audioRecorderPlayer = new AudioRecorderPlayer();

class VoiceRecorderController extends React.Component {
  constructor() {
    super();
    this.state = {
      recordSecs: 9,
      recordTime: '',
      currentPositionSec: '',
      currentDurationSec: '',
      playTime: 0,
      duration: 0,
    };
  }

  onStartRecord = async () => {
    const path = Platform.select({
      ios: 'hello.m4a',
      android: 'sdcard/hello.mp4', // should give extra dir name in android. Won't grant permission to the first level of dir.
    });
    const result = await audioRecorderPlayer.startRecorder(path);

    audioRecorderPlayer.addRecordBackListener(e => {
      this.setState({
        recordSecs: e.current_position,
        recordTime: audioRecorderPlayer.mmssss(Math.floor(e.current_position)),
      });
      return;
    });
    console.log(result);
  };

  onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    this.setState({
      recordSecs: 0,
    });
    console.log(result);
  };

  onStartPlay = async () => {
    console.log('onStartPlay');
    const msg = await audioRecorderPlayer.startPlayer();
    console.log(msg);
    audioRecorderPlayer.addPlayBackListener(e => {
      this.setState({
        currentPositionSec: e.current_position,
        currentDurationSec: e.duration,
        playTime: audioRecorderPlayer.mmssss(Math.floor(e.current_position)),
        duration: audioRecorderPlayer.mmssss(Math.floor(e.duration)),
      });
      return;
    });
  };

  onPausePlay = async () => {
    await audioRecorderPlayer.pausePlayer();
  };

  onStopPlay = async () => {
    console.log('onStopPlay');
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  };
  static propTypes = {};
  static defaultProps = {};

  render() {
    const {
      recordSecs,
      recordTime,
      currentPositionSec,
      currentDurationSec,
      playTime,
      duration,
    } = this.state;
    return (
      <VoiceRecorderView
        recordSecs={recordSecs}
        recordTime={recordTime}
        currentPositionSec={currentPositionSec}
        currentDurationSec={currentDurationSec}
        playTime={playTime}
        duration={duration}
        onStartRecord={this.onStartRecord}
        onStopRecord={this.onStopRecord}
        onStartPlay={this.onStartPlay}
        onPausePlay={this.onPausePlay}
        onStopPlay={this.onStopPlay}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = ({}) => ({});

const actions = {};

export default connect(
  mapStateToProps,
  actions,
)(VoiceRecorderController);
