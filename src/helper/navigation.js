import React, { useState, useEffect, useMemo } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Colors from '../colors/index';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

import { connect } from 'react-redux';

import WelcomeScreen from '../screens/WelcomeScreen';
import AuthScreen from '../screens/AuthScreen';
import ShowScreen from '../screens/ShowScreen';
import SignOutScreen from '../screens/SignOutScreen';
import DetailScreen from '../screens/DetailScreen';
import FavoriteScreen from '../screens/FavoriteScreen';



const secondTabs = () => {
    return (
        <Stack.Navigator mode="modal" headerMode="float"
        >
            <Stack.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={{ title: "Your Favourite", headerTitleAlign: "center", }}
            />
        </Stack.Navigator>
    )
}

const MyTabs = () => {
    return (
        < Tab.Navigator
            activeColor="#f0edf6"
            inactiveColor="#000"
            barStyle={{ backgroundColor: '#694fad' }}
            shifting={true}
        >
            <Tab.Screen
                name="ShowName"
                component={ShowScreen}
                options={{
                    tabBarColor: Colors.primaryColor,
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="md-list-outline" size={23} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={secondTabs}
                options={{
                    tabBarColor: Colors.accentColor,
                    tabBarLabel: 'Favorites',
                    tabBarIcon: ({ color }) => (


                        <Ionicons name="ios-star-outline" size={23} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="SignOut"
                component={SignOutScreen}
                options={{
                    tabBarColor: Colors.thirdColor,
                    tabBarLabel: 'User',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person-add" size={23} color={color} />
                    ),
                }}
            />
        </Tab.Navigator >
    );
}

const navigation = ({ getData }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        if (!getData.id) {
            setIsLoggedIn(null);
        }
        else {
            setIsLoggedIn("hi");
        }
    }, [getData.id])


    return (

        <Stack.Navigator mode="modal" headerMode="float"
        >
            {!isLoggedIn ? (
                <>
                    <Stack.Screen
                        name="Welcome"
                        component={WelcomeScreen}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name="Auth"
                        component={AuthScreen}
                        options={{ headerShown: false }}
                    />
                </>
            ) : (
                <>
                    <Stack.Screen
                        name="Show"
                        component={MyTabs}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Detail"
                        component={DetailScreen}
                        options={{ title: "This is a Map", headerTitleAlign: "center", headerShown: false }}
                    />
                </>
            )}
        </Stack.Navigator>

    );
};

const mapStateToProps = state => {
    return { getData: state.auth }
}

export default connect(mapStateToProps)(navigation);

