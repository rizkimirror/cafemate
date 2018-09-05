import React, {Component} from 'react'
import { Icon } from 'native-base'
import { View } from 'react-native'
import { StackNavigator, createBottomTabNavigator } from 'react-navigation'

// Import screen here

// Main Screen
import GetStartedContainer from './src/containers/GetStartedContainer'
import HomeContainer from './src/containers/HomeContainer'
import FriendsContainer from './src/containers/FriendsContainer'
import ChatContainer from './src/containers/ChatContainer'
import ProfileContainer from './src/containers/ProfileContainer'

// Callable Screens
import TestContainer from './src/containers/TestContainer'
import WelcomeScreenContainer from './src/containers/WelcomeScreenContainer'
import SplashScreenContainer from './src/containers/SplashScreenContainer'

// Call imported screen here by its name
const Main = createBottomTabNavigator({
  Home:{ 
    screen: HomeContainer, 
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarColor: "#fff",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon type={'Entypo'} name={'home'} style={{ color: focused ? "#2c8dfe" : "#ccc", fontSize: 24 }} />
      )
    }
  },
  Friends:{ 
    screen: FriendsContainer,
    navigationOptions: {
      tabBarLabel: "Friends",
      tabBarColor: "#fff",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon type={'Ionicons'} name={'md-contacts'} style={{ color: focused ? "#2c8dfe" : "#ccc", fontSize: 24 }} />
      )
    }
  },
  Place:{ 
    screen: GetStartedContainer,
    navigationOptions: {
      tabBarColor: "#fff",
      tabBarIcon: ({ tintColor, focused }) => (
        <View style={{
          width: 100,
          height: 50,
          backgroundColor: '#2c8dfe',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Icon type={'MaterialIcons'} name={'add-box'} style={{ color: focused ? "#fff" : "#fff", fontSize: 30 }} />  
        </View>
      )
    }
  },
  Chat:{ 
    screen: ChatContainer,
    navigationOptions: {
      tabBarLabel: "Chat",
      tabBarColor: "#fff",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon type={'Ionicons'} name={'ios-chatboxes'} style={{ color: focused ? "#2c8dfe" : "#ccc", fontSize: 24 }} />
      )
    }
  },
  Profile:{ 
    screen: ProfileContainer,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarColor: "#fff",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon type={'MaterialIcons'} name={'person'} style={{ color: focused ? "#2c8dfe" : "#ccc", fontSize: 24 }} />
      )
    }
  }
},{
  initialRouteName: 'Chat',
  tabBarOptions:{
    activeTintColor: '#2c8dfe',
    showLabel: false
  }
})

const Navigators = StackNavigator({
  Main: { screen: Main },
  GetStartedContainer: { screen: GetStartedContainer },
  WelcomeScreenContainer: { screen: WelcomeScreenContainer},
  SplashScreenContainer: { screen: SplashScreenContainer}
},{
  initialRouteName: 'SplashScreenContainer',
  headerMode: 'none'
})

export default Navigators