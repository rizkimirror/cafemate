import React, {Component} from 'react'
import { Icon } from 'native-base'
import { View } from 'react-native'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { StackNavigator } from 'react-navigation'

// Import screen here

// Main Screen
import GetStartedContainer from './src/containers/GetStartedContainer'
import HomeContainer from './src/containers/HomeContainer'
import FriendsContainer from './src/containers/FriendsContainer'
import ChatContainer from './src/containers/ChatContainer'
import ProfileContainer from './src/containers/ProfileContainer'

// Callable Screens
import TestContainer from './src/containers/TestContainer'

// Call imported screen here by its name
const Main = createMaterialBottomTabNavigator({
  Home:{ 
    screen: HomeContainer, 
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarColor: "#fff",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon type={'Entypo'} name={'home'} style={{ color: "#2c8dfe", fontSize: 24 }} />
      )
    }
  },
  Friends:{ 
    screen: FriendsContainer,
    navigationOptions: {
      tabBarLabel: "Friends",
      tabBarColor: "#fff",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon type={'Ionicons'} name={'md-contacts'} style={{ color: "#2c8dfe", fontSize: 24 }} />
      )
    }
  },
  Place:{ 
    screen: GetStartedContainer,
    navigationOptions: {
      tabBarLabel: "Open Place",
      tabBarColor: "#fff",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon type={'MaterialIcons'} name={'add-box'} style={{ color: "#2c8dfe", fontSize: 24 }} />
      )
    }
  },
  Chat:{ 
    screen: ChatContainer,
    navigationOptions: {
      tabBarLabel: "Chat",
      tabBarColor: "#fff",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon type={'Ionicons'} name={'ios-chatboxes'} style={{ color: "#2c8dfe", fontSize: 24 }} />
      )
    }
  },
  Profile:{ 
    screen: ProfileContainer,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarColor: "#fff",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon type={'MaterialIcons'} name={'person'} style={{ color: "#2c8dfe", fontSize: 24 }} />
      )
    }
  }
},{
  initialRouteName: 'Chat',
  activeTintColor: '#2c8dfe',
  barStyle: { backgroundColor: '#fff' },
  headerMode: 'none'
})

const Navigators = StackNavigator({
  Main: { screen: Main },
  TestContainer: { screen: TestContainer }
},{
  initialRouteName: 'TestContainer',
  headerMode: 'none'
})

export default Navigators