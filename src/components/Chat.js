import React, {Component} from 'react'
import { StatusBar, View, FlatList } from 'react-native'
import { Container, Content} from 'native-base'
import NavbarHome from '../particles/NavbarHome'
import Chats from '../particles/Chats'
import chats from '../dummies/chats'

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
              data={chats}
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