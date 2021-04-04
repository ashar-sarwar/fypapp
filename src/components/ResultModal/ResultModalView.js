import React from 'react';
import {View, Image as RnImage} from 'react-native';
import Modal from 'react-native-modal';
import styles from './ResultModalStyles';
import {Colors, Fonts, AppStyles} from '../../theme';
import {Text, Button} from '..';

export default function ResultModalView(props) {
  const {isModalOpen, modalType, closeModal} = props;
  return (
    <View style={styles.container}>
      <Modal
        isVisible={isModalOpen}
        style={{
          alignItems: 'center',
          margin: 20,
        }}
        onBackButtonPress={() => {
          closeModal({[modalType]: false});
        }}
        onBackdropPress={() => {
          closeModal({[modalType]: false});
        }}
        backdropOpacity={0.8}
        backdropColor={Colors.white}
        style={styles.imageSelectorWrapper}>
        <View style={styles.modalStyle}>
          <Text
            style={{color: Colors.green}}
            type="bold"
            size={Fonts.size.xxLarge}>
            NEGATIVE
          </Text>
          <View style={[AppStyles.mTop20]}>
            <Text
              style={{color: Colors.black}}
              size={Fonts.size.large}
              type="medium">
              You don't have Covid 19
            </Text>
          </View>
          <View style={styles.submitBtnWrap}>
            <Button
              color={Colors.black}
              style={styles.submitBtn}
              textStyle={styles.submitBtnText}
              onPress={() => closeModal({[modalType]: false})}>
              OK
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
}
