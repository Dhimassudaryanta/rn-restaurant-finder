import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Slides from '../components/Slides';
import AppLoading from 'expo-app-loading';
import _ from "lodash";




import AsyncStorage from '@react-native-async-storage/async-storage';

const SLIDES_DATA = [
    {
        text: "Welcome to job APP"
    },
    {
        text: "Use this to get a job"
    },
    {
        text: "Set your location then swipe away"
    },

];


const WelcomeScreen = ({ navigation }) => {

    const [inToken, setInToken] = useState(null);


    const onClickHandler = () => {
        navigation.navigate('Auth')
    };

    // useEffect(() => {

    //     const funcToken = async () => {
    //         const getToken = await AsyncStorage.getItem('welcome');

    //         if (getToken) {
    //             navigation.navigate('Auth')
    //         }
    //         else {
    //             setInToken(null);
    //         }
    //     }

    //     funcToken();

    // }, [])



    // if (_.isNull(inToken)) {



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