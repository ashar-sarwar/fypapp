import React from 'react';
import {
  View,
  Image as RnImage,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Text} from '..';
import styles from './SideBarStyles';
import LinearGradient from 'react-native-linear-gradient';
import {AppStyles, Fonts, Images} from '../../theme';
import {Actions} from 'react-native-router-flux';
export default function SideBarView(props) {
  return (
    <LinearGradient
      start={{x: 4, y: 1}}
      end={{x: 2.5, y: 0}}
      colors={['#ffff', '#000000']}
      style={styles.container}>
      <RnImage
        source={Images.DrawerImage}
        style={{height: 160, width: '100%'}}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[AppStyles.flex, {marginTop: 20}]}>
          {/* <View style={styles.itemWrap}>
            <Text type={'semiBold'} size={Fonts.size.large} color={'white'}>
              About
            </Text>
          </View> */}
          <View style={styles.itemWrap}>
            <Text type={'semiBold'} size={Fonts.size.large} color={'white'}>
              Our Mission
            </Text>
          </View>
          {/* <View style={styles.itemWrap}>
            <Text type={'semiBold'} size={Fonts.size.large} color={'white'}>
              Contact Us
            </Text>
          </View> */}
          <TouchableOpacity
            onPress={() => Actions.login()}
            style={styles.itemWrap}>
            <Text type={'semiBold'} size={Fonts.size.large} color={'white'}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
