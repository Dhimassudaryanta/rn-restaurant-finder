import React from 'react';
import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import { Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const SCREEN_WIDTH = Dimensions.get('window').width;
const Slides = ({ data, onClick }) => {



    const renderItem = ({ item }) => {
        return (
            <View style={style.screen}>
                <Text style={style.title}>{item.title}</Text>

                <Text style={style.text}>{item.text}</Text>
            </View>
        );
    }

    const nextLabel = () => {
        return (
            <View style={{
                padding: 15,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{
                    fontWeight: "bold",
                    color: "#62B1F6"
                }}>Next</Text>
            </View>
        )
    }

    const doneLabel = () => {
        return (
            <View style={{
                padding: 15,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontWeight: "bold",
                    color: "#62B1F6"
                }}>Done</Text>
            </View>
        )
    }

    return (
        <AppIntroSlider
            keyExtractor={moment => moment.text}
            data={data}
            renderItem={renderItem}
            activeDotStyle={{ backgroundColor: "#62B1F6" }}
            renderNextButton={nextLabel}
            renderDoneButton={doneLabel}
            onDone={onClick}
        />

    );

};

const style = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',

        paddingHorizontal: SCREEN_WIDTH / 13,
        flex: 1,
        width: SCREEN_WIDTH
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default Slides;