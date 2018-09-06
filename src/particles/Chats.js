import React, {Component} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import {responsiveSize,responsiveFontSize} from 'react-native-rescomponent'

const Chats = (props) => {
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
          <Image 
            source={{uri:props.photoProfileUri}}
            style={{
              width: responsiveSize(props.isOnline ? 7.5 : 8),
              height: responsiveSize(props.isOnline ? 7.5 : 8),
              borderRadius: responsiveSize(props.isOnline ? 7.5 : 8) / 2,
              alignSelf:'center'
            }}/>
        </View>
        <View style={styles.nameAndMessage}>
          <Text style={styles.textName}>{props.name}</Text>
          <Text style={styles.textMessage}>{props.message}</Text>
        </View>
      </View>
      <View style={styles.timeAndAmount}>
        <Text style={styles.textTime}>{props.time}</Text>
        <View style={styles.amountBubble}>
          <Text style={styles.textAmount}>{props.messageAmount}</Text>
        </View>
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
  nameAndMessage:{
    flexDirection:'column', 
    alignSelf: 'center', 
    paddingLeft: 10
  },
  textName:{
    fontSize: responsiveFontSize(2.5), 
    fontWeight: 'bold'
  },
  textMessage:{
    fontSize: responsiveFontSize(2)
  },
  timeAndAmount:{
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center'
  },
  textTime:{
    paddingBottom:5
  },
  amountBubble:{
    height: responsiveSize(3.5), 
    width: responsiveSize(3.5), 
    borderRadius: responsiveSize(3.5) / 2, 
    backgroundColor: '#00E969',
    alignItems:'center',
    justifyContent:'center'
  },
  textAmount:{
    color:'#fff'
  }
})

export default Chats