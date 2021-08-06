import HomeScreen from './home'
import LoginScreen from './login'
import HOC from './HOC'

export default {
  HomeScreen: HOC(HomeScreen),
  LoginScreen: HOC(LoginScreen),
}
