import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { Container, Content } from 'native-base'

export default class OpenPlace extends Component{
  render(){
    return(
      <Container style={styles.container}>
        <StatusBar backgroundColor={'#2c8dfe'}/>
        <Content contentContainerStyle={styles.contentStyle}>
          <View style={styles.titleWrapper}>
            <Text style={styles.whiteColor}>Open Place</Text>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#2c8dfe'
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
    color: '#fff'
  }
})