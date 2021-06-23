import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { facebookLogin } from "../actions/index";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Ionicons } from '@expo/vector-icons';



const AuthScreen = ({ facebookLogin, getData, navigation }) => {


    // useEffect(() => {

    // navigation.addListener('focus', () => {

    //     facebookLogin(() => navigation.navigate('Next'));
    // })

    // }, []);




    onPressHandler = () => {
        facebookLogin();
    };






    return (
        <View style={style.screen}>
            <View style={style.container}>
                <TouchableOpacity onPress={() => onPressHandler()}>
                    <View style={style.row}>

                        <Ionicons name="logo-facebook" size={24} color="white" />

                        <Text style={{ fontSize: 20, color: "white" }}>  Continue with Facebook</Text>



                    </View>
                </TouchableOpacity>
            </View>

        </View >
    );

};

const style = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center"
    },
    container: {
        width: "80%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"

    },
    row:
    {
        padding: 10,
        backgroundColor: "blue",
        flexDirection: 'row',
        alignItems: 'center'
    }


});

const mapStateToProp = state => {
    return { getData: state.token }
};

export default connect(mapStateToProp, { facebookLogin })(AuthScreen);