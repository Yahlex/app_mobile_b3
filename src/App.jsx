/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import {
  StatusBar,
  useColorScheme
} from 'react-native'
// import BottomTab from './components/BottomTab'
import MainNavigator from './navigation/Navigator'

function App () {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <MainNavigator />
      {/* <BottomTab/> */}
    </NavigationContainer>
  )
}

export default App
