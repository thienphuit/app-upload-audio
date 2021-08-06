/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import {
  StyleSheet, StatusBar, SafeAreaView, Fragment,
} from 'react-native'
import { COLORS } from '../../assets/styles'

const HOC = (WrappedComponent) => {
  const App = (props) => {
    return (
      <>
        <WrappedComponent {...props} />
      </>
    )
  }

  return App
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.WHITE,
    // backgroundColor: 'blue',
  },
})
export default HOC
