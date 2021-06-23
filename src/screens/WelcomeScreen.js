import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Slides from '../components/Slides';
import _ from "lodash";




import AsyncStorage from '@react-native-async-storage/async-storage';

const SLIDES_DATA = [
    {
        text: "Welcome to this restaurant APP"
    },
    {
        text: "Use this to get a restaurant location"
    },
    {
        text: "Made by https://github.com/Dhimassudaryanta"
    },

];



const WelcomeScreen = ({ navigation }) => {


    const onClickHandler = () => {
        navigation.navigate('Auth')
    };

    return (
        <View style={style.screen}>
            <Slides
                data={SLIDES_DATA}
                onClick={onClickHandler}
            ></Slides>

        </View>
    );


    // }

};

const style = StyleSheet.create({
    screen: {
        flex: 1,
    },

});

export default WelcomeScreen;