import React, {Component} from 'react'
import { Text, StyleSheet, StatusBar, View, FlatList } from 'react-native'
import { Container, Content} from 'native-base'
import NavbarHome from '../particles/NavbarHome'
import Peoples from '../particles/Peoples'
import {responsiveFontSize} from 'react-native-rescomponent'

export default class Home extends Component{
  render(){
    return(
      <Container>
        <NavbarHome 
          photo={'https://avatars1.githubusercontent.com/u/38149346?s=400&u=7d84802786839cf21eb8e5708d7278293772dc8c&v=4'} 
          title={'Home'} 
          notificationButton={() => alert('Notification')}/>
        <StatusBar backgroundColor={'#2c8dfe'}/>
        <Content>
          <Text style={{fontFamily:'Roboto', fontWeight: 'bold', fontSize:responsiveFontSize(2.5), padding: 10}}>People Around You</Text>
          <View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={[1,2,3,4,5,6,7,8,9,10]}
              renderItem={({item}) => (
                <Peoples/>
              )}
            />
          </View>
        </Content>
      </Container>
    )
  }
}