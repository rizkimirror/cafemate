import React, { Component } from 'react'
import WelcomeScreen from '../components/WelcomeScreen'

export default class WelcomeScreenContainer extends Component {
  render () {
    return (
      <WelcomeScreen
        actionButton={() => this.props.navigation.navigate("GetStartedContainer")}
      />
    )
  }
} 