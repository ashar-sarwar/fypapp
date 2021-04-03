import React from 'react';

import util from '../../util';
import PropTypes from 'prop-types';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSet,
  AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';
import VoiceRecorderView from './VoiceRecorderView';
import {connect} from 'react-redux';
import {Platform} from 'react-native';
const audioRecorderPlayer = new AudioRecorderPlayer();

class VoiceRecorderController extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recordSecs: 0,

      recordTime: '00:00:00',

      currentPositionSec: 0,

      currentDurationSec: 0,

      playTime: '00:00:00',

      duration: '00:00:00',

      isIconActive: false,
      showPlayButton: false,
      disableButtons: false,
      showResultModal: false,
    };

    this.audioRecorderPlayer = new AudioRecorderPlayer();

    this.audioRecorderPlayer.setSubscriptionDuration(0.09); // optional. Default is 0.1
  }

  static propTypes = {};
  static defaultProps = {};

  componentDidMount() {
    util.audioRecord();
  }

  onStartRecord = async () => {
    const path = 'sdcard/hello.mp4';

    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,

      AudioSourceAndroid: AudioSourceAndroidType.MIC,

      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,

      AVNumberOfChannelsKeyIOS: 2,

      AVFormatIDKeyIOS: AVEncodingOption.aac,
    };

    console.log('audioSet', audioSet);

    const uri = await this.audioRecorderPlayer.startRecorder(path, audioSet);

    this.audioRecorderPlayer.addRecordBackListener(e => {
      this.setState({
        recordSecs: e.current_position,
        showPlayButton: false,
        recordTime: this.audioRecorderPlayer.mmssss(
          Math.floor(e.current_position),
        ),
      });
    });

    console.log(`uri: ${uri}`);
  };

  onStopRecord = async () => {
    const result = await this.audioRecorderPlayer.stopRecorder();

    this.audioRecorderPlayer.removeRecordBackListener();

    this.setState({
      showPlayButton: true,
      recordSecs: 0,
    });

    console.log(result);
  };
  onStartPlay = async e => {
    console.log('onStartPlay');

    const path = 'sdcard/hello.mp4';

    const msg = await this.audioRecorderPlayer.startPlayer(path);

    this.audioRecorderPlayer.setVolume(1.0);

    console.log(msg);

    this.audioRecorderPlayer.addPlayBackListener(e => {
      if (e.current_position === e.duration) {
        console.log('finished');
        this.setState({disableButtons: false});
        this.audioRecorderPlayer.stopPlayer();
      }

      this.setState({
        currentPositionSec: e.current_position,

        currentDurationSec: e.duration,

        playTime: this.audioRecorderPlayer.mmssss(
          Math.floor(e.current_position),
        ),

        duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
      });
    });
  };

  onPausePlay = async e => {
    await this.audioRecorderPlayer.pausePlayer();
  };

  onStopPlay = async () => {
    console.log('onStopPlay');
    this.setState({disableButtons: false});

    this.audioRecorderPlayer.stopPlayer();
    this.audioRecorderPlayer.removePlayBackListener();
  };

  handleVoiceRecording = () => {
    console.log('ASDAD', this.state.isIconActive);
    if (this.state.isIconActive) {
      this.onStopRecord();
    } else {
      this.onStopPlay();
      this.onStartRecord();
    }
  };

  handleDiagnosis = () => {
    this.setState({showResultModal: true});
  };

  setValue = (key, callback) => {
    this.setState(key, callback);
  };

  render() {
    const {
      recordSecs,
      recordTime,
      currentPositionSec,
      currentDurationSec,
      playTime,
      duration,
      showPlayButton,
      disableButtons,
      showResultModal,
    } = this.state;
    return (
      <VoiceRecorderView
        recordSecs={recordSecs}
        recordTime={recordTime}
        currentPositionSec={currentPositionSec}
        currentDurationSec={currentDurationSec}
        playTime={playTime}
        duration={duration}
        showPlayButton={showPlayButton}
        isIconActive={this.state.isIconActive}
        disableButtons={disableButtons}
        showResultModal={showResultModal}
        setValue={this.setValue}
        handleVoiceRecording={this.handleVoiceRecording}
        handleDiagnosis={this.handleDiagnosis}
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
