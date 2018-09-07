import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar, FlatList, Image } from 'react-native'
import { Container, Content, Button } from 'native-base'
import { responsiveFontSize, responsiveSize } from 'react-native-rescomponent'

export default class Favorites extends Component{
  render(){
    return(
      <Container style={styles.container}>
        <StatusBar backgroundColor={'#2C8DFE'}/>
        <Content contentContainerStyle={styles.contentStyle}>
          <Text style={{fontSize: responsiveFontSize(3), paddingBottom: 15, paddingTop: 40, color: '#fff'}}>Select your favorites</Text>
          <FlatList
            style={{
              alignSelf:'center'
            }}
            numColumns={3}
            data={[1,2,3,4,5,6,7,8,9]}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={{
                width: responsiveSize(15),
                height: responsiveSize(15),
                backgroundColor: '#D5D5D5',
                borderRadius: 5,
                margin:5,
                alignItems:'center',
                justifyContent:'center'
              }}>
                <Image
                  source={{uri: 'https://s.kaskus.id/images/2018/01/11/1346827_20180111040058.jpg'}}
                  style={{
                    width: responsiveSize(6),
                    height: responsiveSize(6),
                    borderRadius: responsiveSize(6)/2
                  }}
                />
                <Text style={{fontSize: responsiveFontSize(2), fontWeight:'bold'}}>Flirting</Text>
                <Text style={{fontSize: responsiveFontSize(1.5)}}>+ 100 Peoples</Text>
              </View>
            )}
          />
        </Content>
        <View style={styles.bottomPadding}>
          <Button style={styles.nextButton}>
            <Text style={styles.buttonNextText}>Next</Text>
          </Button>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#2C8DFE'
  },
  contentStyle:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomPadding:{
    paddingBottom:50,
    paddingTop:10
  },
  nextButton:{
    alignSelf:'center',
    justifyContent:'center',
    borderRadius:5,
    backgroundColor: '#2C8DFE',
    borderWidth: 2,
    borderColor: '#fff',
    width: 250
  },
  buttonNextText:{
    alignSelf:'center', 
    fontSize: responsiveFontSize(2), 
    color: '#fff'
  }
})