import React, {Component} from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import {responsiveFontSize, responsiveSize, responsiveHeight, responsiveWidth} from 'react-native-rescomponent'

const OpenMatch = (props) => {
  return(
    <View style={styles.openMatch}>
      <View style={styles.firstWrapper}>
        <View style={styles.iconWrapper}>
          <Image
            source={require('../assets/logo/icon-lovelove.png')}
            style={styles.iconStyle}/>
        </View>
        <View>
          <Text style={styles.title}>Match With Amazing People</Text>
          <Text style={styles.description}>Find your mates with match with same</Text>
          <Text style={styles.description}>hobbies and favorites.</Text>
        </View>
      </View>

      <View style={styles.secondWrapper}>
        <View style={styles.photosWrapper}>
          <View style={styles.imageWrapper}>
            <Image
              source={{uri: 'https://3.bp.blogspot.com/-0OuesfG8Awk/VvCk7qSufNI/AAAAAAAAANY/hQdj_ysZpukTBCN1Tl6NWfw4dkm4yhprA/s320/12189780_991284354248887_2502125557057687698_n.jpg'}}
              style={{
                position: 'absolute',
                left:0,
                width: responsiveSize(3),
                height: responsiveSize(3),
                borderRadius: responsiveSize(3) / 2
              }}
            />
            <Image
              source={{uri: 'https://s.kaskus.id/images/2018/01/11/1346827_20180111040058.jpg'}}
              style={{
                position: 'absolute',
                left:15,
                width: responsiveSize(3),
                height: responsiveSize(3),
                borderRadius: responsiveSize(3) / 2
              }}
            />
            <Image
              source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQeThIO2NXM0FR_0TK2akdczqdkAoEt5NAL4BlBU_Jwo-Zov6_pg'}}
              style={{
                position: 'absolute',
                left:30,
                width: responsiveSize(3),
                height: responsiveSize(3),
                borderRadius: responsiveSize(3) / 2
              }}
            />
            <Image
              source={{uri: 'https://lh4.googleusercontent.com/-ck_MQoFtWlk/URN0VxN5JHI/AAAAAAAADiE/APWfxmO0qw8/%25255BUNSET%25255D.jpg'}}
              style={{
                position: 'absolute',
                left:45,
                width: responsiveSize(3),
                height: responsiveSize(3),
                borderRadius: responsiveSize(3) / 2
              }}
            />
            <Image
              source={{uri: 'https://cdn.brilio.net/news/2017/09/01/131331/672357-cewek-cantik-juragan-kayu-ini-viral.jpg'}}
              style={{
                position: 'absolute',
                left:60,
                width: responsiveSize(3),
                height: responsiveSize(3),
                borderRadius: responsiveSize(3) / 2
              }}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonOpenMatch}>
            <Text style={styles.buttonOpenMatchText}>Open Match</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  openMatch:{
    marginVertical: 10,
    height: responsiveHeight(25),
    width: responsiveWidth(95),
    borderRadius: 5,
    backgroundColor: '#F5F5F5',
    alignSelf:'center',
    padding: 15,
    justifyContent:'space-between'
  },
  firstWrapper:{
    flexDirection: 'row', 
    justifyContent:'space-between'
  },
  iconWrapper:{
    alignItems: 'center', 
    justifyContent:'center'
  },
  iconStyle:{
    height: responsiveSize(7),
    width: responsiveSize(7)
  },
  title:{
    fontFamily: 'Roboto-Bold', 
    fontSize: responsiveFontSize(2.5)
  },
  description:{
    fontFamily: 'Roboto-Regular'
  },
  secondWrapper:{
    flexDirection:'row', 
    justifyContent:'space-between'
  },
  photosWrapper:{
    flexDirection:'row', 
    alignItems:'center'
  },
  imageWrapper:{
    justifyContent:'center', 
    alignItems:'center'
  },
  buttonOpenMatch:{
    padding: 10,
    backgroundColor: '#2c8dfe',
    width: responsiveSize(15),
    height: responsiveSize(5),
    borderRadius: 5,
    alignItems:'center',
    justifyContent: 'center'
  },
  buttonOpenMatchText:{
    fontFamily: 'Roboto-Bold', 
    color: '#fff'
  }
})

export default OpenMatch