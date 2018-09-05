import { StackNavigator } from 'react-navigation'

// Import screen here
import GetStartedContainer from './src/containers/GetStartedContainer'
import WelcomeScreenContainer from './src/containers/WelcomeScreenContainer'
import SplashScreenContainer from './src/containers/SplashScreenContainer'


// Call imported screen here by its name
const Navigators = StackNavigator({
  GetStartedContainer: { screen: GetStartedContainer },
  WelcomeScreenContainer: { screen: WelcomeScreenContainer},
  SplashScreenContainer: { screen: SplashScreenContainer}
  

},{
  initialRouteName: 'SplashScreenContainer',
  headerMode: 'none'
})

export default Navigators