import React from 'react';
import {View, Image as RnImage, ScrollView} from 'react-native';
import {Text} from '..';
import styles from './SideBarStyles';
import LinearGradient from 'react-native-linear-gradient';
import {AppStyles, Fonts} from '../../theme';
export default function SideBarView(props) {
  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 2.5, y: 0}}
      colors={['#002286', '#f8446f']}
      style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[AppStyles.flex, {marginTop: 20}]}>
          <View style={styles.itemWrap}>
            <Text type={'semiBold'} size={Fonts.size.large} color={'white'}>
              About
            </Text>
          </View>
          <View style={styles.itemWrap}>
            <Text type={'semiBold'} size={Fonts.size.large} color={'white'}>
              Our Mission
            </Text>
          </View>
          <View style={styles.itemWrap}>
            <Text type={'semiBold'} size={Fonts.size.large} color={'white'}>
              Contact Us
            </Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
