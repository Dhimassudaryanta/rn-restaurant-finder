import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { Card, CardItem, Body } from 'native-base';

const FavoriteScreen = ({ getFavorite, navigation }) => {

    const onPressHandler = (gotId) => {
        navigation.navigate('Detail', { idCatched: gotId })
    };


    if (getFavorite.length > 0) {
        return (
            <View style={style.screen}>
                <View style={style.container}>
                    <FlatList
                        horizontal={false}
                        numColumns={2}
                        data={getFavorite}
                        keyExtractor={(moment) => moment.id.toString()}
                        renderItem={({ item }) => {
                            return (
                                <View style={style.card} >

                                    <TouchableOpacity onPress={text => onPressHandler(item.id)}>
                                        <Card>
                                            <CardItem header bordered>
                                                <Image style={style.image} source={{ uri: item.image_url }}></Image>
                                            </CardItem>
                                            <CardItem>
                                                <Body>
                                                    <Text numberOfLines={1}>{item.name} </Text>
                                                    <Text></Text>

                                                </Body>
                                            </CardItem>
                                        </Card>

                                    </TouchableOpacity>
                                </View>
                            );
                        }}
                    >
                    </FlatList>

                </View>
            </View>

        );
    } else {
        return (
            <View style={style.screen2}>
                <View style={style.container2}>
                    <Text>You dont have any favourites food yet !</Text>
                </View>
            </View>
        );
    }
};

const style = StyleSheet.create({
    screen: {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center"
    },
    container: {
        width: "90%",
    },
    // batas
    screen2: {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    container2: {
        width: "90%",
        alignItems: "center",
    },
    //batas
    card: {
        padding: 5,
        flex: 1
    },
    image: {
        flex: 1,
        width: null,
        height: Dimensions.get('window').height / 3.5
    },


});

const mapStateToProps = state => {
    return { getFavorite: state.favourite }
}

export default connect(mapStateToProps)(FavoriteScreen);