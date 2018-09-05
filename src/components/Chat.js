import React, {Component} from 'react'
import { StatusBar, View, FlatList } from 'react-native'
import { Container, Content} from 'native-base'
import NavbarHome from '../particles/NavbarHome'
import Chats from '../particles/Chats'

export default class Home extends Component{
  render(){
    return(
      <Container>
        <NavbarHome 
          photo={'https://avatars1.githubusercontent.com/u/38149346?s=400&u=7d84802786839cf21eb8e5708d7278293772dc8c&v=4'} 
          title={'Chat'} 
          notificationButton={() => alert('Notification')}/>
        <StatusBar backgroundColor={'#2c8dfe'}/>
        <Content>
          <View style={{paddingVertical:5, paddingHorizontal: 10}}>
            <FlatList
              data={[
                {
                  photoUri: 'https://lh4.googleusercontent.com/-ck_MQoFtWlk/URN0VxN5JHI/AAAAAAAADiE/APWfxmO0qw8/%25255BUNSET%25255D.jpg',
                  name: 'Dinda Cans',
                  message: 'boleh minta nomor nya?',
                  amount:2,
                  time: '09:00 PM',
                  isOnline: true
                },
                {
                  photoUri: 'https://3.bp.blogspot.com/-0OuesfG8Awk/VvCk7qSufNI/AAAAAAAAANY/hQdj_ysZpukTBCN1Tl6NWfw4dkm4yhprA/s320/12189780_991284354248887_2502125557057687698_n.jpg',
                  name: 'Chen',
                  message: 'Lagi apa?',
                  amount:2,
                  time: '09:00 PM',
                  isOnline: false
                },
                {
                  photoUri: 'https://s.kaskus.id/images/2018/01/11/1346827_20180111040058.jpg',
                  name: 'Tika',
                  message: 'mau berak dulu yah :)',
                  amount:2,
                  time: '09:00 PM',
                  isOnline: true
                },
                {
                  photoUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQeThIO2NXM0FR_0TK2akdczqdkAoEt5NAL4BlBU_Jwo-Zov6_pg',
                  name: 'Merlynn',
                  message: 'can you send your nude pict?',
                  amount:2,
                  time: '09:00 PM',
                  isOnline: true
                },
                {
                  photoUri: 'https://cdn.brilio.net/news/2017/09/01/131331/672357-cewek-cantik-juragan-kayu-ini-viral.jpg',
                  name: 'Momo',
                  message: 'hello world',
                  amount:2,
                  time: '09:00 PM',
                  isOnline: false
                },
              ]}
              renderItem={({item}) => (
                <Chats
                  photoProfileUri={item.photoUri}
                  name={item.name}
                  message={item.message} 
                  messageAmount={item.amount} 
                  time={item.time}
                  isOnline={item.isOnline}/>
              )}
            />
          </View>
        </Content>
      </Container>
    )
  }
}