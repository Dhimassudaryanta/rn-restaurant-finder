import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, Button, Image } from 'react-native';

import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

import { Card, CardItem, Body } from 'native-base';

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { connect } from 'react-redux';
import { saveFood } from '../actions/index';
import { removeFood } from '../actions/index';

const DetailScreen = ({ getData, route, navigation, saveFood, getFavorite, removeFood }) => {
    const { idCatched } = route.params;

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [titleButton, setTitleButton] = useState('');

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [star, setStar] = useState('');
    const [review, setReview] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');

    const [image, setImage] = useState(null);


    const favouriteHandler = () => {
        if (Filter) {
            removeFood(idCatched, () => navigation.navigate('Favorite'));

        }
        else {
            saveFood(Detail);
            navigation.navigate('Favorite');
        }
    };


    const Detail = getData.find(
        (Detail) => Detail.id === idCatched
    );

    const Filter = getFavorite.find(
        (Detail) => Detail.id === idCatched
    );

    useEffect(() => {
        if (Filter) {
            setLatitude(Filter.coordinates.latitude)
            setLongitude(Filter.coordinates.longitude)
            setLatitude(Filter.coordinates.latitude)
            setLongitude(Filter.coordinates.longitude)
            setPhone(Filter.phone);
            setStar(Filter.rating);
            setReview(Filter.review_count);
            setStreet(Filter.location.address1);
            setCity(Filter.location.city + " , " + Filter.location.state);
            setZipCode(Filter.location.zip_code);
            setImage(Filter.image_url);


            setTitleButton("Remove from favourite")
        }
        else {
            setLatitude(Detail.coordinates.latitude)
            setLongitude(Detail.coordinates.longitude)
            setPhone(Detail.phone);
            setStar(Detail.rating);
            setReview(Detail.review_count);
            setStreet(Detail.location.address1);
            setCity(Detail.location.city + " , " + Detail.location.state);
            setZipCode(Detail.location.zip_code);
            setImage(Detail.image_url);



            setTitleButton("Add to favourite")
        }
    }, [latitude])




    //separated
    return (

        <ScrollView style={style.screen}>
            <View style={{
                alignItems: "center"
            }}>
                <View >
                    <MapView
                        style={style.map}
                        initialRegion={{
                            latitude: latitude,
                            longitude: longitude,
                            latitudeDelta: 0.1,
                            longitudeDelta: 0.1,
                        }}
                    >
                        <Marker
                            title="restaurant"
                            coordinate={{
                                latitude: latitude,
                                longitude: longitude,
                                latitudeDelta: 0.1,
                                longitudeDelta: 0.1,
                            }}
                        />
                    </MapView>

                </View>
                <View style={style.container}>
                    <View>
                        <Card>
                            <CardItem header bordered>
                                <Text numberOfLines={1}>Restaurant Info : {name}</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text><Ionicons name="ios-call-outline" size={14} color="black" /> : {phone}</Text>
                                    <Text><Ionicons name="ios-star-outline" size={14} color="black" /> : {star}</Text>
                                    <Text>Review : {review}</Text>

                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <View>
                        <Card>
                            <CardItem bordered>
                                <Text numberOfLines={1}>{name} address :</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text><Entypo name="address" size={14} color="black" /> : {street}</Text>
                                    <Text><MaterialCommunityIcons name="city-variant-outline" size={14} color="black" /> : {city}</Text>
                                    <Text>Zip code : {zipCode}</Text>


                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <View>
                        <Card>
                            <CardItem cardBody>
                                <Image source={{ uri: image }} style={style.image} />
                            </CardItem>
                        </Card>
                    </View>
                    <View style={{ paddingTop: 15, paddingBottom: 15, alignItems: "center" }}>
                        <View style={{ width: "80%" }}>

                            <Button
                                title={titleButton}
                                onPress={text => favouriteHandler(idCatched)}
                            ></Button>

                        </View>
                    </View>
                </View>
            </View>
        </ScrollView >
    );
};

const style = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white",

    },
    container: {
        flex: 1,
        marginTop: 15,
        width: "90%",
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 3,
    },

    //center
    image: {
        flex: 1,
        width: null,
        height: Dimensions.get('window').height / 3.8,
    },


});

const mapStateToProps = state => {
    return {
        getData: state.food, getFavorite: state.favourite
    }
};

export default connect(mapStateToProps, { saveFood, removeFood })(DetailScreen);