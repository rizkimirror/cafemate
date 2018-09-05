import React, { Component } from 'react'
import { StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native'
import { Container } from 'native-base'
import logo from '../assets/logo/logocafemates.png'


export default class SplashScreen extends Component{
  render(){
    return(
      <Container style={styles.container}>
        <StatusBar
          backgroundColor="#2C8DFE" />
        <TouchableOpacity onPress={this.props.actionButton}>
          <Image source={logo} style={styles.logo}/>
        </TouchableOpacity>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2C8DFE',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 300,
    height: 120
  },
})