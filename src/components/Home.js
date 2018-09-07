import React, {Component} from 'react'
import { Text, StyleSheet, StatusBar, View, FlatList, Image} from 'react-native'
import { Container, Content, Toast } from 'native-base'
import NavbarHome from '../particles/NavbarHome'
import Peoples from '../particles/Peoples'
import peoples from '../dummies/peoples'
import {responsiveFontSize} from 'react-native-rescomponent'
import OpenMap from '../particles/OpenMap'
import OpenMatch from '../particles/OpenMatch'

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
              data={peoples}
              renderItem={({item}) => (
                <Peoples
                  imageUrl={item.imageUrl}
                  name={item.name}
                  age={item.age}
                  location={item.location}
                  onPressImage={() => Toast.show({
                    text: item.imageUrl,
                    duration:1000
                  })}
                  onPressName={() => Toast.show({
                    text: `Name ${item.name} ages ${item.age}`,
                    duration:1000
                  })}
                  onPressLocation={() => Toast.show({
                    text: item.location,
                    duration:1000
                  })}/>
              )}
            />
          </View>
          <OpenMap/>
          <OpenMatch/>
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