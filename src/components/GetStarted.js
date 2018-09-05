import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { Container, Content, Button, Icon, Radio } from 'native-base'
import { responsiveFontSize } from 'react-native-rescomponent'

export default class GetStarted extends Component{
  render(){
    return(
      <Container style={styles.container}>
        <StatusBar backgroundColor={'#2C8DFE'}/>
        <Content contentContainerStyle={styles.contentStyle}>

          <View style={styles.titleWrapper}>
            <Text style={styles.whiteColor}>What gender you looking for ?</Text>
              <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 10}}>
                <Radio
                  color={"#fff"}
                  selectedColor={"#fff"}
                  selected={true}
                />
                <Text style={styles.whiteColor}>  Men</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 10}}>
                <Radio
                  color={"#fff"}
                  selectedColor={"#fff"}
                  selected={false}
                />
                <Text style={styles.whiteColor}>  Woman</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 10}}>
                <Radio
                  color={"#fff"}
                  selectedColor={"#fff"}
                  selected={false}
                />
                <Text style={styles.whiteColor}>  Custom</Text>
              </View>
          </View>
        </Content>
        <View style={{flexDirection: 'row', justifyContent: 'center', paddingBottom: 50}}>
            <Button onPress={this.props.actionButton} style={{
              alignSelf:'center',
              justifyContent:'center',
              borderRadius:5,
              backgroundColor: '#2C8DFE',
              borderWidth: 2,
              borderColor: '#fff',
              width: 120,
              marginRight: 10
            }}>
              <Text style={{alignSelf:'center', fontSize: responsiveFontSize(2), color: '#fff'}}>Back</Text>
            </Button>
            <Button onPress={this.props.actionButton} style={{
              alignSelf:'center',
              justifyContent:'center',
              borderRadius:5,
              backgroundColor: '#2C8DFE',
              borderWidth: 2,
              borderColor: '#fff',
              width: 120,
              marginLeft: 10
              
            }}>
              <Text style={{alignSelf:'center', fontSize: responsiveFontSize(2), color: '#fff'}}>Next</Text>
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
  titleWrapper:{
    alignItems: 'flex-start',
    padding:10,
    marginBottom:5
  },
  whiteColor:{
    color: '#fff',
    alignSelf:'center', 
    fontSize: responsiveFontSize(3)
  }
})