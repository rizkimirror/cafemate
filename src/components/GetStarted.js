import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { Container, Content } from 'native-base'

export default class GetStarted extends Component{
  render(){
    return(
      <Container style={styles.container}>
        <StatusBar backgroundColor={'#555BFF'}/>
        <Content contentContainerStyle={styles.contentStyle}>

          <View style={styles.titleWrapper}>
            <Text style={styles.whiteColor}>Welcome to cafemates development</Text>
            <Text style={styles.whiteColor}>Let's Get started</Text>
          </View>

        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#555BFF'
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