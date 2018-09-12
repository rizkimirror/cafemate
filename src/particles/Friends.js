import React, {Component} from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {responsiveSize,responsiveFontSize} from 'react-native-rescomponent'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Friends = (props) => {
  return(
    <View style={styles.chatBubbles}>
      <View style={styles.profileAndMessage}>
        <View style={{
          width: responsiveSize(8),
          height: responsiveSize(8),
          borderRadius: responsiveSize(8) / 2,
          backgroundColor: props.isOnline ? '#2c8dfe' : '#fff',
          alignItems:'center',
          justifyContent:'center'
        }}>
          <TouchableOpacity>
            <Image 
              source={{uri:props.photoProfileUri}}
              style={{
                width: responsiveSize(props.isOnline ? 7.5 : 8),
                height: responsiveSize(props.isOnline ? 7.5 : 8),
                borderRadius: responsiveSize(props.isOnline ? 7.5 : 8) / 2,
                alignSelf:'center'
              }}/>
          </TouchableOpacity>
        </View>
        <View style={styles.nameAndLocation}>
          <TouchableOpacity>
            <Text style={styles.textName}>{props.name}</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Entypo name={'location-pin'} style={{
              fontSize: responsiveFontSize(2), 
              color: '#2AEFC5'
            }}/>
            <Text style={styles.textLocation}>{props.location}</Text>
          </View>
        </View>
      </View>
      <View style={{alignItems:'center', justifyContent:'center'}}>
        <Ionicons name={'ios-chatboxes'} style={{fontSize: responsiveFontSize(3), paddingRight: 10, color: props.isOnline ? '#2c8dfe' : '#ccc'}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  chatBubbles:{
    flexDirection: 'row', 
    justifyContent:'space-between', 
    borderBottomColor: '#f6f6f6', 
    borderBottomWidth:1, 
    paddingVertical: 15
  },
  profileAndMessage:{
    flexDirection: 'row'
  },
  nameAndLocation:{
    flexDirection:'column', 
    alignSelf: 'center', 
    paddingLeft: 10
  },
  textName:{
    fontFamily: 'Roboto-Bold',
    fontSize: responsiveFontSize(2.5), 
  },
  textLocation:{
    fontFamily: 'Roboto-Regular',
    fontSize: responsiveFontSize(2)
  }
})

export default Friends