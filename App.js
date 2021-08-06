import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import HomeScreen from './src/screen'
import screens from './src/screen'
import { SCREEN_NAME } from './src/config'

const { HomeScreen, LoginScreen } = screens
const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={SCREEN_NAME.LoginScreen}

      >
        <Stack.Screen name={SCREEN_NAME.LoginScreen} component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App
