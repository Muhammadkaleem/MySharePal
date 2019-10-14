import React from 'react';
import {View, Text} from "react-native";
import Splash from "./src/Screens/Splash";
import onBoarding from "./src/Screens/onBoarding";
import Login from "./src/Screens/Login";
import Verification from "./src/Screens/Verification";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import {createDrawerNavigator} from "react-navigation-drawer";

console.disableYellowBox = true;
// const appDrawerNavigator = createDrawerNavigator({
//       // Home: {
//       //   screen: Home
//       // },
//       // Cart: {
//       //   screen: Cart
//       // },
//       // PendingOrder: {
//       //   screen: PendingOrders
//       // },
//       // Profile: {
//       //   screen: Profile
//       // },
//       // OrderHistory: {
//       //   screen: OrderHistory
//       // },
//     },
//     {
//       contentComponent: SideMenu,
//       drawerWidth: 300,
//       drawerPosition: "left",
//       lazy: true
//     })
const RoutStackNavigator = createStackNavigator({
  Splash: {
    screen: Splash
  },
  onBoarding: {
    screen: onBoarding
  },
  Login:{
    screen: Login
  },
  Verification:{
    screen: Verification
  }
}, {
  headerMode: 'none'
})

export default createAppContainer(RoutStackNavigator);