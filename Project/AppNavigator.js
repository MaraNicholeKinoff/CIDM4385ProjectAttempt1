import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from './components/Home';
import Map from './components/Map';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';
import SocialMedia from './components/SocialMedia';
import Schedule from './components/Schedule';
import Sponsors from './components/Sponsors';
import Speakers from './components/Speakers';
import Directors from './components/Directors';
import FAQ from './components/FAQ';
import Lost from './components/Lost';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Map: { screen: Map },
  Account: { screen: Account },
  Login: { screen: Login},
  Register: {screen: Register},
  SocialMedia: {screen: SocialMedia},
  Schedule: {screen: Schedule},
  Sponsors: {screen: Sponsors},
  Speakers: {screen: Speakers},
  Directors: {screen: Directors},
  FAQ: {screen: FAQ},
  Lost: { screen: Lost },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;