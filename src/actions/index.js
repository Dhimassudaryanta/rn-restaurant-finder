import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Facebook from 'expo-facebook';
import { Alert } from 'react-native';

//food

import Api from '../apis/Api';
import FacebookApi from '../apis/Facebook';


export const facebookLogin = () => async dispatch => {

    try {
        await Facebook.initializeAsync({
            appId: '517644596030916',
            appName: "jobfinder",
        });
        const out = await Facebook.logOutAsync();
        const result = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile', 'email'],
            auth_type: 'reauthenticate'
        });
        if (result.type === 'success') {
            await AsyncStorage.setItem('token', result.token);
            const response = await FacebookApi.get(`/${result.userId}?fields=id,name,picture,hometown,birthday&access_token=${result.token}`);

            const newresponse = { ...response.data, token: result.token }
            dispatch({ type: "FACEBOOK_LOGIN_SUCCESS", payload: newresponse })

            Alert.alert(
                'Status',
                'You success to login',
                [{ text: 'Okay', style: 'destructive' }]);

        } else {
            Alert.alert('Log in', 'You need to Log in with facebook !');
        }
    } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
    }


};

export const facebookLogout = (fbId, fbToken) => async dispatch => {
    // await Facebook.logOutAsync();

    // const auth = await Facebook.getAuthenticationCredentialAsync();
    // console.log(auth);
    // await Facebook.logOutAsync();
    // const auth3 = await Facebook.getAuthenticationCredentialAsync();
    // console.log(auth3);

    // await fetch(`https://graph.facebook.com/${fbId}/permissions`, { method: "DELETE", body: fbToken })

    // const response = await FacebookApi.delete(`/${fbId}/permissions`, { fbToken });
    // const response = await FacebookApi.delete(`/${fbId}?access_token=${fbToken}`);
    // const response2 = await FacebookApi.get(`/${fbId}?method=delete&access_token=${fbToken}`);
    // console.log(response.data);
    dispatch({ type: "FACEBOOK_LOGOUT" })
}



export const fetchFood = term => async dispatch => {
    const response = await Api.get('/search',
        {
            params: {
                limit: 12,
                term: term,
                location: 'usa',
            }
        });


    dispatch({ type: "FETCH_FOOD", payload: response.data.businesses })
}


export const saveFood = data => async dispatch => {

    dispatch({ type: "SAVE_FOOD", payload: data })

}

export const removeFood = (data, callback) => async dispatch => {


    const deleteHandler = () => {
        dispatch({ type: "REMOVE_FOOD", payload: data })
        if (callback) {
            callback();
        }
    };

    Alert.alert(
        'Delete',
        'Do you want to delete this item?',
        [{ text: 'Okay', style: 'destructive', onPress: deleteHandler }
            ,
        { text: 'Nope', style: 'destructive', onPress: null }
        ]);

}






// const doFacebookLogin = async dispatch => {
//     let result = await Facebook.logInWithReadPermissionsAsync({
//         appId: '517644596030916',
//         appName: "jobfinder",
//         facebookScheme: "fb517644596030916",

//     });

//     if (result.type === 'cancel') {
//         return dispatch({ type: FACEBOOK_LOGIN_FAIL })
//     }

//     await AsyncStorage.setItem('fb_token', token);
//     dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })


// };


//   try {
//         await Facebook.initializeAsync({
//             appId: '517644596030916',
//             appName: "jobfinder",
//             facebookScheme: "fb517644596030916",
//         });
//         const result = await Facebook.logInWithReadPermissionsAsync({
//             permissions: ['public_profile'],
//         });

//         console.log(result);
//         if (result.type === 'success') {

//             Alert.alert('Logged in!');
//         } else {
//             Alert.alert('Dont Close');
//         }
//     } catch ({ message }) {
//         alert(`Facebook Login Error: ${message}`);
//     }

 // console.log(token);
    // console.log("hahaha")
    // if (token) {
    //     dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    // }
    // else {
    //     doFacebookLogin(dispatch);
    // }