import React from 'react'
import { Root } from 'native-base'
import { AppRegistry } from 'react-native'
import Navigators from './Navigators'

const App = () => (
  <Root>
    <Navigators/>
  </Root>
)

console.disableYellowBox = true
AppRegistry.registerComponent("cafemates", () => App);