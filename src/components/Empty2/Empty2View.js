import React from 'react';
import {View, Image as RnImage} from 'react-native';
import {Text} from '../../components';
import styles from './Empty2Styles';
export default function Empty2View(props) {
  return (
    <View style={styles.container}>
      <Text>welcome to Empty2</Text>
    </View>
  );
}
