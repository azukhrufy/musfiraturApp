import React from 'react';
import { 
  createStackNavigator, 
  createAppContainer, 
  createBottomTabNavigator, 
  createSwitchNavigator } 
from 'react-navigation';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import List from '../screens/List';
import Article from '../screens/Article';
import Booking from '../screens/Booking';
import History from '../screens/History';
import HajiUmrahFind from '../screens/HajiUmrahFind';
import PaketWisataFind from '../screens/PaketWisataFind';
import OtherPayment from '../screens/OtherPayment';
import Splash from '../screens/Splash';
import values from '../values';
import DetailHistory from '../screens/DetailHistory';
import UserScreen from '../screens/UserScreen';
import ListHaji from '../screens/ListHaji';
import ListPaketWisata from '../screens/ListPaketWisata';
import PaketHaji from '../screens/PaketHaji';
import PaketWisata from '../screens/PaketWisata';
import User from '../screens/User';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import FormBookingHaji from '../screens/FormBookingHaji';


const HajiUmrahNavigator = createStackNavigator({
  HajiUmrah: {
    screen: HajiUmrahFind,
  },
  PaketWisataFind: {
    screen: PaketWisataFind,
  },
  ListHaji: {
    screen: ListHaji,
    navigationOptions: {
      headerTitle: 'Hasil Pencarian',
    },
  },
  ListPaketWisata: {
    screen: ListPaketWisata,
    navigationOptions: {
      headerTitle: 'Hasil Pencarian',
    },
  },
  PaketHaji: {
    screen: PaketHaji
  },
  PaketWisata: {
    screen: PaketWisata
  },
  FormBookingHaji: {
    screen: FormBookingHaji
  },
});

const UserNavigator = createStackNavigator({
  User: {
    screen: User,
  },
  Register: {
    screen: RegisterScreen,
  },
  Login: {
    screen: LoginScreen,
  },
},
{
  initialRouteName: 'Register',
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
});

const HomeNavigator = createStackNavigator({
  List: {
    screen: List
  },
  // HajiUmrahNav: HajiUmrahNavigator,
  Article: {
    screen: Article
  },
  Other: {
    screen: OtherPayment,
  }, 
  // HistoryDetail: {
  //   screen: DetailHistory
  // }
});

// const DetailHistoryNavigator = createStackNavigator({
//   DetailHistory: { screen: DetailHistory },
// });

const HistoryNavigator = createStackNavigator({
  History: { screen: History },
  DetailHistory: { screen: DetailHistory },
});

const MainTabs = createBottomTabNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarLabel: 'Home',
    },
  },
  Booking: {
    screen: Booking,
    navigationOptions: {
      tabBarLabel: 'Booking',
    },
  },
  History: HistoryNavigator,
  User: UserNavigator,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      const IconComponent = SimpleLineIcons;
      let iconName;

      if (routeName === 'Home') {
        iconName = 'home';
      } else if (routeName === 'Booking') {
        iconName = 'note';
      } else if (routeName === 'History') {
        iconName = 'clock';
      } else if (routeName === 'User') {
        iconName = 'user';
      }
      return <IconComponent name={iconName} size={20} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: values.colors.primary,
    // inactiveTintColor: '#BCCCD4',
    inactiveTintColor: values.colors.inactiveBar,
  },
});

const MainApp = createStackNavigator({  
  Main: {
    screen: MainTabs
  },
  HajiUmrahNavigator,
  // Article
},
{
  // initialRouteName: 'Main',
  headerMode: 'none',
  navigationOptions: {
      headerVisible: false,
  }
});

const SplashScreen = createSwitchNavigator({
  Splash: { screen: Splash },
  MainApp
});

export default createStackNavigator(
    {
      SplashScreen,
      // DetailHistoryNavigator,
    },
    {
      // initialRouteName: 'Main',
      headerMode: 'none',
      navigationOptions: {
          headerVisible: false,
      }
    }
  );
