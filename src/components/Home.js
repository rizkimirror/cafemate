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
          <Text style={styles.titles}>People Around You</Text>
          <View>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={[
                {
                  imageUrl: 'https://lh4.googleusercontent.com/-ck_MQoFtWlk/URN0VxN5JHI/AAAAAAAADiE/APWfxmO0qw8/%25255BUNSET%25255D.jpg',
                  name: 'Dilla',
                  age: 18,
                  location: 'North Jakarta'
                },
                {
                  imageUrl: 'https://3.bp.blogspot.com/-0OuesfG8Awk/VvCk7qSufNI/AAAAAAAAANY/hQdj_ysZpukTBCN1Tl6NWfw4dkm4yhprA/s320/12189780_991284354248887_2502125557057687698_n.jpg',
                  name: 'Merlynn',
                  age: 18,
                  location: 'North Jakarta'
                },
                {
                  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQeThIO2NXM0FR_0TK2akdczqdkAoEt5NAL4BlBU_Jwo-Zov6_pg',
                  name: 'Ling',
                  age: 18,
                  location: 'North Jakarta'
                },
              ]}
              renderItem={({item}) => (
                <Peoples
                  imageUrl={item.imageUrl}
                  name={item.name}
                  age={item.age}
                  location={item.location}/>
              )}
            />
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  titles:{
    fontFamily:'Roboto-Bold',
    fontSize:responsiveFontSize(2.5), 
    padding: 10
  }
})