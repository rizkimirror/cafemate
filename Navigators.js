import { StackNavigator } from 'react-navigation'

// Import screen here
import GetStartedContainer from './src/containers/GetStartedContainer'

// Call imported screen here by its name
const Navigators = StackNavigator({
  GetStartedContainer: { screen: GetStartedContainer }
},{
  initialRouteName: 'GetStartedContainer',
  headerMode: 'none'
})

export default Navigators