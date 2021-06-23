import React, { useEffect, useState } from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers';
import Colors from './src/colors';
import { useSelector, connect } from 'react-redux';


import WelcomeScreen from './src/screens/WelcomeScreen';
import AuthScreen from './src/screens/AuthScreen';
import ShowScreen from './src/screens/ShowScreen';
import SignOutScreen from './src/screens/SignOutScreen';
import DetailScreen from './src/screens/DetailScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

const store = createStore(reducers, applyMiddleware(thunk));
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


import * as Facebook from 'expo-facebook';
//vector
import { Ionicons } from '@expo/vector-icons';

import Helper from './src/helper/navigation';





// const FirstStack = () => {
//   return (
//     <Stack.Navigator mode="modal" headerMode="float"
//     >


//       <Stack.Screen
//         name="Welcome"
//         component={WelcomeScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Auth"
//         component={AuthScreen}
//         options={{ headerShown: false }}
//       />

//       <Stack.Screen
//         name="Next"
//         component={MyTabs}
//         options={{ headerShown: false }}
//       />


//     </Stack.Navigator>
//   )
// };



// const signOutScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="SignOut"
//         component={SignOutScreen}
//         options={{ title: "Sign Out", headerTitleAlign: "center" }}
//       />
//     </Stack.Navigator>
//   )
// }
// const showScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Show"
//         component={ShowScreen}
//         options={{ title: "This is a Map", headerTitleAlign: "center", headerShown: false }}
//       />
//       <Stack.Screen
//         name="Detail"
//         component={DetailScreen}
//         options={{ title: "This is a Map", headerTitleAlign: "center", headerShown: false }}
//       />
//     </Stack.Navigator>
//   )
// }



// const MyTabs = () => {


//   return (
//     < Tab.Navigator
//       activeColor="#f0edf6"
//       inactiveColor="#3e2465"
//       barStyle={{ backgroundColor: '#694fad' }}
//       shifting={true}
//     >
//       <Tab.Screen
//         name="Get a Map"
//         component={showScreen}
//         options={{
//           tabBarColor: Colors.primaryColor,
//           tabBarLabel: 'Search',
//           tabBarIcon: ({ color }) => (
//             <Ionicons name="md-list-outline" size={23} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Random"
//         component={signOutScreen}
//         options={{
//           tabBarColor: Colors.accentColor,
//           tabBarLabel: 'Favorites',
//           tabBarIcon: ({ color }) => (


//             <Ionicons name="ios-star-outline" size={23} color={color} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Get a Map3"
//         component={signOutScreen}
//         options={{
//           tabBarColor: Colors.accentColor,
//           tabBarLabel: 'User',
//           tabBarIcon: ({ color }) => (


//             <Ionicons name="person-add" size={23} color={color} />


//           ),
//         }}
//       />
//     </Tab.Navigator >
//   );
// }




function App() {
  return (
    <Provider store={store}>
      <NavigationContainer><Helper></Helper></NavigationContainer>
    </Provider>

  );
};


export default App;

