import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native'
import { Container, Content, Button  } from 'native-base'
import { responsiveFontSize } from 'react-native-rescomponent'
import logo from '../assets/logo/iconturbine.png'

export default class Introducing extends Component{
  render(){
    return(
      <Container style={styles.container}>
        <StatusBar backgroundColor={'#2C8DFE'}/>
        <Content contentContainerStyle={styles.contentStyle}>
          <View>
            <Image source={logo} style={styles.logo}/>
          </View>
          <View style={styles.titleWrapper}>
            <Text style={styles.whiteColor}>
              Welcome to Cafemates, here are will find 
              you with soulmate, and directly give you 
              an opportunity to find him/her No chit-chat 
              on your messaging.
            </Text>
          </View>
        </Content>
        <View style={styles.bottomPadding}>
          <Button onPress={this.props.actionButton} style={styles.nextButton}>
            <Text style={styles.buttonNextText}>Next</Text>
          </Button>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#2C8DFE'
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'center'
  },
  contentStyle:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleWrapper:{
    alignItems: 'center',
    padding:10,
    marginBottom:5
    
  },
  whiteColor:{
    color: '#fff',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    padding:10,
    marginBottom:5
  },
  nextButton:{
    alignSelf:'center',
    justifyContent:'center',
    borderRadius:5,
    backgroundColor: '#2C8DFE',
    borderWidth: 2,
    borderColor: '#fff',
    width: 250
  },
  bottomPadding:{
    paddingBottom:50
  },
  buttonNextText:{
    alignSelf:'center', 
    fontSize: responsiveFontSize(2), 
    color: '#fff'
  }
})