import React, { Component } from 'react'
import OpenPlace from '../components/OpenPlace'

export default class OpenPlaceContainer extends Component{
  render(){
    return(
      <OpenPlace
        gotoMain={() => this.props.navigation.navigate('Main')}
      />
    )
  }
}