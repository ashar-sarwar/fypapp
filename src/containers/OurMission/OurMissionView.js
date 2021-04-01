import React from 'react';
import {View, Image as RnImage, ScrollView} from 'react-native';
import {Text} from '../../components';
import styles from './OurMissionStyles';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, Fonts} from '../../theme';
export default function OurMissionView(props) {
  return (
    <LinearGradient
      colors={['#FF0000', '#000000']}
      start={{x: 2.1, y: -2.01}}
      end={{x: -1.3, y: -1.9}}
      style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingBottom: 34,
            alignItems: 'flex-start',
            paddingTop: 20,
            paddingLeft: 25,
          }}>
          <Text color={Colors.white} size={Fonts.size.xxxxLarge} type="bold">
            Our Mission
          </Text>
        </View>
        <View style={{paddingLeft: 25, paddingRight: 10, paddingBottom: 20}}>
          <Text
            color={Colors.white}
            size={Fonts.size.large}
            type="medium"
            style={{lineHeight: 35}}>
            Our mission is to beat this pandemic and to make every place virus
            free. Checkovid is our minor effort to do so, It predicts the
            covid19 using your cough signals and tells you either you have to go
            to hospital to test your covid or have patience and stay at home.
            Our next target is to make such an app that will predict any disease
            related to cough just through an application and this will really
            help the world in this situation of the world.
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}
