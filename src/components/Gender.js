import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar} from 'react-native'
import { Container, Content, Button, Radio } from 'native-base'
import { responsiveFontSize } from 'react-native-rescomponent'

export default class Interested extends Component{
  render(){
    return(
      <Container style={styles.container}>
        <StatusBar backgroundColor={'#2C8DFE'}/>
        <Content contentContainerStyle={styles.contentStyle}>
          <View style={styles.titleWrapper}>
            <Text style={styles.whiteColor}>Please insert your gender ...</Text>
            <View style={styles.radioButtonWrapper}>
              <Radio 
                color={"#fff"}
                selectedColor={"#fff"} 
                selected={true}/>
              <Text style={styles.checkBox}>Man</Text>
            </View>
            <View style={styles.radioButtonWrapper}>
              <Radio 
                color={"#fff"}
                selectedColor={"#fff"} 
                selected={false}/>
              <Text style={styles.checkBox}>Women</Text>
            </View>
            <View style={styles.radioButtonWrapper}>
              <Radio 
                color={"#fff"}
                selectedColor={"#fff"} 
                selected={false}/>
              <Text style={styles.checkBox}>Custom</Text>
            </View>
          </View>
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
  titleWrapper:{
    alignItems: 'flex-start',
    padding:10,
    marginBottom:5
  },
  whiteColor:{
    color: '#fff',
    alignSelf:'center', 
    fontSize: responsiveFontSize(3)
  },
  backButton:{
    alignSelf:'center',
    justifyContent:'center',
    borderRadius:5,
    backgroundColor: '#2C8DFE',
    borderWidth: 2,
    borderColor: '#fff',
    width: 120,
    marginRight: 10
  },
  nextButton:{
    alignSelf:'center',
    justifyContent:'center',
    borderRadius:5,
    backgroundColor: '#2C8DFE',
    borderWidth: 2,
    borderColor: '#fff',
    width: 120,
    marginLeft: 10
  },
  buttonText:{
    alignSelf:'center', 
    fontSize: responsiveFontSize(2), 
    color: '#fff' 
  },
  radioButtonWrapper:{
    flexDirection: 'row', 
    alignItems:'center',
    paddingTop: 10
  },
  checkBox:{
    paddingLeft: 15,
    color: '#fff',
    alignSelf:'center',
    fontSize: responsiveFontSize(3)
  },
  buttonBottomWrapper:{
    flexDirection: 'row', 
    justifyContent: 'center', 
    paddingBottom: 50
  },
  bottomPadding:{
    paddingBottom:50
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