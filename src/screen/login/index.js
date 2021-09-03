import React from 'react'
import {
  View, StyleSheet, Text, SafeAreaView, StatusBar, Dimensions, Image, TouchableOpacity,
} from 'react-native'
import { COLORS, FONTS } from '../../../assets/styles'
import { youtube } from '../../../assets/images'
import { SCREEN_NAME } from '../../config'

const { width, height } = Dimensions.get('window')
const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.wrapContent}>
        <Text style={{ fontSize: 30, color: COLORS.WHITE, ...FONTS.InterBold }}>TP & QL</Text>
        <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAME.HomeScreen)}>
          <View style={{
            width: width * 0.75,
            height: 40,
            marginTop: 100,
            backgroundColor: '#fefefc',
            justifyContent: 'space-between', 
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 12,
          }}
          >
            <View style={{ marginLeft: 16 }}>
              <Image source={youtube} style={{ width: 40, height: 40 }} resizeMode="contain" />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ ...FONTS.InterBold, fontSize: 16, color: COLORS.RED }}> Login</Text>
            </View>
            <View style={{ marginRight: 48 }} />
          </View>
        </TouchableOpacity>
        <Text style={{
          fontSize: 16,
          position: 'absolute',
          bottom: 10,
          color: COLORS.GRAY_50,
          ...FONTS.InterBold,
        }}
        >
          Make by me
        </Text>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.RED,
    // alignItems: 'center',
  },
  wrapContent: {
    flex: 1,
    paddingTop: height / 4,
    alignItems: 'center',
  },
})
export default LoginScreen
