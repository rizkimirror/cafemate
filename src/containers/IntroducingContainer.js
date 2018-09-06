import React, { Component } from 'react'
import Introducing from '../components/Introducing'

export default class IntroducingContainer extends Component {
  render () {
    return (
      <Introducing
        actionButton={() => this.props.navigation.navigate("InterestedContainer")}
      />
    )
  }
}