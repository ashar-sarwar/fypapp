import React from 'react';
import {View, Image as RnImage} from 'react-native';
import Modal from 'react-native-modal';
import styles from './ResultModalStyles';
import {Colors} from '../../theme';
import Text from '../Text';

export default function ResultModalView(props) {
  const {isModalOpen, modalType, closeModal} = props;
  return (
    <View style={styles.container}>
      <Modal
        isVisible={isModalOpen}
        style={styles.modal}
        onBackButtonPress={() => {
          closeModal({[modalType]: false});
        }}
        onBackdropPress={() => {
          closeModal({[modalType]: false});
        }}
        backdropOpacity={0.8}
        backdropColor={Colors.white}
        style={styles.imageSelectorWrapper}></Modal>
      <Text>NEFARUVED</Text>
    </View>
  );
}
