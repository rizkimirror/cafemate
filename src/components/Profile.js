import React, {Component} from 'react'
import { Text, StyleSheet, StatusBar, View, Image } from 'react-native'
import { Container, Content} from 'native-base'
import { responsiveWidth, responsiveHeight, responsiveSize, responsiveFontSize } from 'react-native-rescomponent'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class Home extends Component{
  render(){
    return(
      <Container>
        <StatusBar backgroundColor={'#2c8dfe'}/>
        <Content style={{backgroundColor: '#f3f3f3'}}>
          
          <View style={{
            width: responsiveWidth(100),
            height: responsiveHeight(35),
            backgroundColor: '#e2e2e2',
            alignItems:'center'
          }}>

            <Image 
              source={{uri: 'https://www.pixelstalk.net/wp-content/uploads/2016/11/Flat-Design-Backgrounds-620x388.jpg'}}
              style={{width: responsiveWidth(100),height: responsiveHeight(20)}}/>
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Image 
                source={{uri: 'https://avatars1.githubusercontent.com/u/38149346?s=400&u=7d84802786839cf21eb8e5708d7278293772dc8c&v=4'}}
                style={{
                  width: responsiveSize(10), 
                  height: responsiveSize(10), 
                  borderRadius: responsiveSize(10) /  2, 
                  position:'absolute',
                  zIndex: 1}}/>
            </View>

            <View style={{width: responsiveWidth(100),height: responsiveHeight(15), backgroundColor: '#fff'}}>
              <View style={{alignItems:'flex-end'}}>
                <MaterialIcons name={'edit'} style={{padding:5, fontSize: responsiveFontSize(3)}}/>
              </View>
              <View style={{alignItems:'center', paddingTop: 10}}>
                <Text style={{fontFamily: 'Roboto-Bold'}}>Muhammad Isa WK</Text>
                <Text style={{fontFamily: 'Roboto-Regular'}}>"There is no time, You fuckin shit"</Text>
              </View>
            </View>

          </View>

          <View style={{
            marginTop: 10,
            width: responsiveWidth(100),
            height: responsiveHeight(25),
            backgroundColor: '#fff',
            alignItems:'center',
            justifyContent:'center'
          }}>
            <Text>Details</Text>
          </View>

          <View style={{
            marginTop: 10,
            width: responsiveWidth(100),
            height: responsiveHeight(25),
            backgroundColor: '#fff',
            alignItems:'center',
            justifyContent:'center'
          }}>
            <Text>Pictures</Text>
          </View>        

        </Content>
      </Container>
    )
  }
}