import React, { Component } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


export default class PeopleProfileNonActive extends Component{
  render(){
    return(
      <Container style={styles.container}>
        <StatusBar backgroundColor={'#000000'}/>
        <Content contentContainerStyle={styles.contentStyle}>
          <View style={styles.titleWrapper}>
            <Header>
              <Left>
                <Button transparent>
                  <Icon name='arrow-back' />
                </Button>
              </Left>
              <Body>
                <Title>Header</Title>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name='menu' />
                </Button>
              </Right>
            </Header>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff'
  },
  contentStyle:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleWrapper:{
    alignItems: 'center',
    padding:10,
    marginBottom:5
  },
  
})