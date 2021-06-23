import React, { useEffect, useState } from 'react';
import { Text, View, Button, StyleSheet, Image, Dimensions, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { connect } from 'react-redux';
import * as Facebook from 'expo-facebook';
import { facebookLogout } from '../actions/index';


const SignOut = ({ navigation, getData, facebookLogout }) => {



    console.log(getData);

    const onPressHandler = async () => {
        const auth = await Facebook.getAuthenticationCredentialAsync();
        console.log(auth);

        Alert.alert(
            "Sign Out",
            "Are you sure you want to logout?",
            [
                {
                    text: "Cancel",

                    style: "cancel"
                },
                { text: "OK", onPress: executionHandler }
            ]
        );


    }

    const executionHandler = async () => {
        facebookLogout(getData.id, getData.token);
        console.log("Im LogOut")
    }

    return (
        <View style={style.screen}>
            <View style={style.container}>

                {getData.name !== null ?
                    <View style={style.containerDetail}>

                        <Image style={style.image} source={{ uri: getData.picture.data.url }}>
                        </Image>


                        <Text style={{ fontWeight: "bold", fontSize: 24, marginTop: 20 }}>Hi ! {getData.name}</Text>

                    </View>

                    : null}
                <View style={style.borderBar}>

                </View>
                <View style={{ marginTop: 20 }}>
                    <Button
                        title="Sign Out"
                        onPress={onPressHandler}
                        color="#d9534f"
                    ></Button>
                </View>
            </View>
        </View>
    )
};

const style = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white"
    },
    container: {
        marginTop: 30,
        width: "80%",
    },
    containerDetail: {
        alignItems: "center"
    },
    image: {
        width: Dimensions.get('window').width / 5,
        height: Dimensions.get('window').width / 5,
        borderRadius: Dimensions.get('window').width / 10
    },
    borderBar: {
        borderBottomWidth: 1,
        borderColor: '#ccc',

    },

});

const mapStateToProps = state => {
    return { getData: state.auth }
}

export default connect(mapStateToProps, { facebookLogout })(SignOut);