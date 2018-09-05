import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import {Icon} from 'native-base'
import {responsiveSize,responsiveFontSize} from 'react-native-rescomponent'

const Peoples = (props) => {
  return(
    <View style={{alignItems:'center', padding:5}}>
      <View style={{
        width: responsiveSize(10),
        height: responsiveSize(10),
        borderRadius: responsiveSize(10) / 2,
        backgroundColor: '#2c8dfe',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Image 
          source={{uri: 'https://avatars1.githubusercontent.com/u/38149346?s=400&u=7d84802786839cf21eb8e5708d7278293772dc8c&v=4'}}
          style={{
            width: responsiveSize(9.5),
            height: responsiveSize(9.5),
            borderRadius: responsiveSize(9.5) / 2
          }}/>
      </View>
      <Text style={{fontWeight: 'bold', fontSize: responsiveFontSize(2)}}>Isa, 18</Text>
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <Icon type={'Entypo'} name={'location-pin'} style={{fontSize: responsiveFontSize(2), color: '#2AEFC5'}}/>
        <Text>West Jakarta</Text>
      </View>
    </View>
  )
}

export default Peoples