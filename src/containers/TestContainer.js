import React, { Component } from 'react'
import Test from '../components/Test'

export default class TestContainer extends Component{
  render(){
    return(
      <Test
        gotoMain={() => this.props.navigation.navigate('Main')}
      />
    )
  }
}