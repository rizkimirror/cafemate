import React, {Component} from 'react'
import { Text, StyleSheet, StatusBar, View } from 'react-native'
import { Container, Content} from 'native-base'
import NavbarHome from '../particles/NavbarHome'

export default class Home extends Component{
  render(){
    return(
      <Container>
        <NavbarHome 
          photo={'https://avatars1.githubusercontent.com/u/38149346?s=400&u=7d84802786839cf21eb8e5708d7278293772dc8c&v=4'} 
          title={'Profile'} 
          notificationButton={() => alert('Notification')}/>
        <StatusBar backgroundColor={'#2c8dfe'}/>
        <Content contentContainerStyle={{flex: 1, justifyContent:'center',alignItems:'center'}}>
          <View style={{alignItems:'center', justifyContent:'center'}}>
            <Text style={{alignSelf:'center', fontSize: 24}}>Profile</Text>
          </View>
        </Content>
      </Container>
    )
  }
}