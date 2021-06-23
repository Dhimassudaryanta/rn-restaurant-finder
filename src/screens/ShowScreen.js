import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, FlatList, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
import MapView from 'react-native-maps';
import SearchBar from '../components/SearchBar';

//icon
import { Ionicons } from '@expo/vector-icons';

//get
import { connect } from 'react-redux';
import { fetchFood } from "../actions/index";


const ShowScreen = ({ fetchFood, getData, navigation, getData2 }) => {


    useEffect(() => {
        fetchFood('burger');
    }, [])


    const actionInputHandler = (term) => {
        fetchFood(term);
    };

    console.log(getData);
    if (getData.length > 1) {
        return (
            <View style={style.screen}>
                <View style={style.container}>
                    <SearchBar
                        actionHandler={actionInputHandler}
                    ></SearchBar>

                    <FlatList
                        data={getData}
                        keyExtractor={(moment) => moment.id.toString()}
                        renderItem={({ item }) => {
                            return (
                                <View style={style.row}>
                                    <View >
                                        <Image style={style.image} source={{ uri: item.image_url }}></Image>

                                    </View>
                                    <TouchableOpacity
                                        style={style.textContainer}
                                        onPress={() => navigation.navigate('Detail', { idCatched: item.id })}>
                                        <Text
                                            style={style.title}
                                            numberOfLines={1}
                                        >{item.name}</Text>
                                        <Text
                                            numberOfLines={1}
                                        >{item.phone}</Text>

                                        <View style={style.textThird}>
                                            <Text><Ionicons name="ios-pencil-sharp" size={15} color="black" /> {item.review_count}</Text>
                                            <Text> <Ionicons name="ios-star-outline" size={15} color="black" /> {item.rating}/5</Text>
                                        </View>
                                        <View style={style.borderBar}></View>
                                    </TouchableOpacity>
                                    <View style={{ justifyContent: "center" }}>
                                        <TouchableOpacity onPress={() => deleteHandler(item.id)}>
                                            <Ionicons name="ios-chevron-forward-sharp" size={24} color="black" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            );
                        }}
                    >
                    </FlatList>


                </View>
            </View>
        );
    }
    else {
        return (
            <View style={style.screen}>
                <View style={style.container}>
                    <SearchBar
                        actionHandler={actionInputHandler}
                    ></SearchBar>
                    <View style={style.loading}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>

                </View>
            </View>
        );
    }

};

const style = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center'
    },
    container: {
        marginTop: Dimensions.get('window').height / 19,
        flex: 1,
        width: "90%",
    },

    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

    //center
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        marginTop: 10,
    },
    title: {
        fontWeight: "bold"
    },
    textContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        maxWidth: "80%",
    },
    textThird: {
        justifyContent: "space-between",
        paddingHorizontal: 0,
        flexDirection: 'row'
    }
    ,

    borderBar: {

        borderBottomWidth: 1,
        borderColor: '#ccc',

    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    loading: {
        flex: 1,
        justifyContent: "center"
    }

});

const mapStateToProp = state => {
    return { getData: state.food, getData2: state.auth }
}

export default connect(mapStateToProp, { fetchFood })(ShowScreen);