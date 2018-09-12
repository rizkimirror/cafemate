import React, {Component} from 'react'
import { Text, StyleSheet, StatusBar, View, Image } from 'react-native'
import { Container, Content, Input} from 'native-base'
import NavbarHome from '../particles/NavbarHome'
import { responsiveHeight, responsiveWidth, responsiveFontSize, responsiveSize } from 'react-native-rescomponent'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import brokenHeart from '../assets/icons/icon-brokenheart.png'
import Friends from '../particles/Friends'

export default class Home extends Component{
  render(){
    return(
      <Container>
        <NavbarHome 
          photo={'https://avatars1.githubusercontent.com/u/38149346?s=400&u=7d84802786839cf21eb8e5708d7278293772dc8c&v=4'} 
          title={'Friends List'} 
          notificationButton={() => alert('Notification')}/>
        <StatusBar backgroundColor={'#2c8dfe'}/>
        <Content>
          <View style={styles.searchBox} elevation={2}>
            <View style={styles.searchBoxWrapper}>
              <FontAwesome name={'search'} style={styles.searchIcon}/>
              <Input placeholder={"Search your friend..."} keyboardType={'web-search'}/>
            </View>
          </View>
          <View style={{paddingVertical:5, paddingHorizontal: 10}}>
            <Friends photoProfileUri={'https://avatars1.githubusercontent.com/u/38149346?s=400&u=7d84802786839cf21eb8e5708d7278293772dc8c&v=4'}
                   name={'Muhammad Isa'}
                   location={'J.CO Jakarta Selatan'}
                   isOnline={true}/>
            <Friends photoProfileUri={'https://avatars1.githubusercontent.com/u/38149346?s=400&u=7d84802786839cf21eb8e5708d7278293772dc8c&v=4'}
                   name={'Muhammad Isa'}
                   location={'J.CO Jakarta Selatan'}
                   isOnline={false}/>
            <Friends photoProfileUri={'https://avatars1.githubusercontent.com/u/38149346?s=400&u=7d84802786839cf21eb8e5708d7278293772dc8c&v=4'}
                   name={'Muhammad Isa'}
                   location={'J.CO Jakarta Selatan'}
                   isOnline={true}/>
          </View>
          <View style={{alignSelf:'center', paddingTop: 10, alignItems: 'center'}}>
            <Image source={brokenHeart} style={{height: responsiveSize(4.6), width: responsiveSize(5.3)}}/>
            <View style={{paddingTop: 5, alignItems: 'center'}}>
              <Text style={{color: '#555BFF'}}>I'm sorry, Your friendslist</Text>
              <Text style={{color: '#555BFF'}}>just ultil here.</Text>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  searchBox:{
    marginVertical: 10,
    width: responsiveWidth(90),
    height: responsiveHeight(8),
    backgroundColor:'#fff', 
    borderRadius:5, 
    marginTop:15, 
    justifyContent:'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    alignSelf: 'center'
  },
  searchBoxWrapper:{
    flexDirection: 'row', 
    justifyContent:'center', 
    alignItems: 'center'
  },
  searchIcon:{
    fontSize: responsiveFontSize(3), 
    paddingHorizontal: 10
  }
})