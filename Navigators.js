// Imports
import React, {Component} from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { View, Text } from 'react-native'
import { StackNavigator, createBottomTabNavigator } from 'react-navigation'
import { Animated, Easing } from 'react-native';

// Main Screen
import OpenPlaceContainer from './src/containers/OpenPlaceContainer'
import HomeContainer from './src/containers/HomeContainer'
import FriendsContainer from './src/containers/FriendsContainer'
import ChatContainer from './src/containers/ChatContainer'
import ProfileContainer from './src/containers/ProfileContainer'

// GetStarted Screen
import InterestedContainer from './src/containers/InterestedContainer'
import IntroducingContainer from './src/containers/IntroducingContainer'
import GenderContainer from './src/containers/GenderContainer'

// Callable Screens
import SplashScreenContainer from './src/containers/SplashScreenContainer'

// Main Screens Navigator
const Main = createBottomTabNavigator({
  Home:{ 
    screen: HomeContainer, 
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarColor: "#fff",
      tabBarIcon: ({ tintColor, focused }) => (
        <View style={{
          width: 100,
          height: 50,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Entypo name={'home'} style={{ color: focused ? tintColor : "#ccc", fontSize: 24 }} />
          <Text style={{color: focused ? tintColor : "#ccc"}}>Home</Text>
        </View>
      )
    }
  },
  Friends:{ 
    screen: FriendsContainer,
    navigationOptions: {
      tabBarLabel: "Friends",
      tabBarColor: "#fff",
      tabBarIcon: ({ tintColor, focused }) => (
        <View style={{
          width: 100,
          height: 50,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Ionicons name={'md-contacts'} style={{ color: focused ? tintColor : "#ccc", fontSize: 24 }} />
          <Text style={{color: focused ? tintColor : "#ccc"}}>Friends</Text>
        </View>
      )
    }
  },
  Place:{ 
    screen: OpenPlaceContainer,
    navigationOptions: {
      tabBarColor: "#fff",
      tabBarIcon: ({ focused }) => (
        <View style={{
          width: 100,
          height: 50,
          backgroundColor: '#2c8dfe',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <MaterialIcons name={'add-box'} style={{ color: focused ? "#fff" : "#fff", fontSize: 30 }} /> 
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
        <View style={{
          width: 100,
          height: 50,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Ionicons name={'ios-chatboxes'} style={{ color: focused ? tintColor : "#ccc", fontSize: 24 }} />
          <Text style={{color: focused ? tintColor : "#ccc"}}>Chat</Text>
        </View>
      )
    }
  },
  Profile:{ 
    screen: ProfileContainer,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarColor: "#fff",
      tabBarIcon: ({ tintColor, focused }) => (
        <View style={{
          width: 100,
          height: 50,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <MaterialIcons name={'person'} style={{ color: focused ? tintColor : "#ccc", fontSize: 24 }} />
          <Text style={{color: focused ? tintColor : "#ccc"}}>Profile</Text>
        </View>
      )
    }
  }
},{
  initialRouteName: 'Home',
  tabBarOptions:{
    activeTintColor: '#2c8dfe',
    showLabel: false
  }
})

// Setup Screens Navigator
const Setup = StackNavigator({
  InterestedContainer: { screen: InterestedContainer },
  IntroducingContainer: { screen: IntroducingContainer },
  GenderContainer: { screen: GenderContainer }
},{
  initialRouteName: 'InterestedContainer',
  headerMode: 'none',
  transitionConfig: () => {
    return {
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true,
      },
      screenInterpolator: ({ layout, position, scene }) => {
        const { index } = scene
        const { initWidth } = layout
  
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [-initWidth, 0, 0]
        })
  
        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1]
        })
  
        return { opacity, transform: [{ translateX }] }
      }
    }
  }
})

// Root of Navigators
const Navigators = StackNavigator({
  Main: { screen: Main },
  Setup: { screen: Setup },
  SplashScreenContainer: { screen: SplashScreenContainer }
},{
  initialRouteName: 'Setup',
  headerMode: 'none'
})

export default Navigators