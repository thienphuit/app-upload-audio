import React from 'react'
import {
  View, StyleSheet, Text, SafeAreaView, StatusBar, Dimensions,
} from 'react-native'
import { COLORS, FONTS } from '../../../assets/styles'

const { width, height } = Dimensions.get('window')
const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.wrapContent}>
        <Text style={{ fontSize: 30, color: COLORS.WHITE, ...FONTS.InterBold }}>TP & QL</Text>
        <View />
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.RED,
    alignItems: 'center',
  },
  wrapContent: {
    flex: 1,
    paddingTop: height / 4,
  },
})
export default LoginScreen
