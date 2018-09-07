import React, {Component} from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import {responsiveSize,responsiveFontSize} from 'react-native-rescomponent'
// 'https://avatars1.githubusercontent.com/u/38149346?s=400&u=7d84802786839cf21eb8e5708d7278293772dc8c&v=4'

const Peoples = (props) => {
  return(
    <View style={{alignItems:'center', padding:5}}>
      <TouchableOpacity onPress={props.onPressImage}>
        <View style={{
          width: responsiveSize(10),
          height: responsiveSize(10),
          borderRadius: responsiveSize(10) / 2,
          backgroundColor: '#2c8dfe',
          alignItems:'center',
          justifyContent:'center'
        }}>
          <Image 
            source={{uri: props.imageUrl}}
            style={styles.image}/>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onPressName}>
        <Text style={styles.textNameAndAge}>{props.name}, {props.age}</Text>
      </TouchableOpacity>
      <View style={styles.locationWrapper}>
        <TouchableOpacity onPress={props.onPressLocation}>
          <Entypo name={'location-pin'} style={styles.placeIcon}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onPressLocation}>
          <Text style={styles.location}>{props.location}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: responsiveSize(9.5),
    height: responsiveSize(9.5),
    borderRadius: responsiveSize(9.5) / 2
  },
  textNameAndAge:{
    fontFamily: 'Roboto-Bold', 
    fontSize: responsiveFontSize(2)
  },
  locationWrapper:{
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems:'center'
  },
  placeIcon:{
    fontSize: responsiveFontSize(2), 
    color: '#2AEFC5'
  },
  location:{
    fontFamily: 'Roboto-Regular'
  }
})

export default Peoples