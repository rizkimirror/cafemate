import React, { Component } from 'react'
import { Header, Left, Body, Right, Button, Title } from 'native-base'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import { responsiveWidth, responsiveSize, responsiveFontSize } from 'react-native-rescomponent'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class NavbarHome extends Component {
  render(){
    return(
      <Header style={styles.header}>
        <Left>
          <TouchableOpacity>
            <Image 
              source={{ uri: this.props.photo }}
              style={styles.photoProfile}/>
          </TouchableOpacity>
        </Left>
        <Body>
          <Title style={styles.title}>{this.props.title}</Title>
        </Body>
        <Right>
          <Button transparent onPress={this.props.notificationButton}>
            <Ionicons name='ios-notifications' style={styles.icons}/>
          </Button>
        </Right>
      </Header>
    ) 
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: '#fff',
    width: responsiveWidth(100),
    height: responsiveSize(8),
    borderBottomWidth:1,
    borderBottomColor: "#e2e2e2"
  },
  photoProfile:{
    width: responsiveSize(5),
    height: responsiveSize(5),
    borderRadius: responsiveSize(5) / 2
  },
  title:{
    color: '#000',
    fontFamily: 'Roboto-Bold'
  },
  icons:{
    color: '#000',
    fontSize: responsiveFontSize(3)
  }
})