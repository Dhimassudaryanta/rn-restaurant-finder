import React, { useState } from 'react';
import { TextInput, View, StyleSheet, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const SearchBar = ({ actionHandler }) => {

    const [term, setTerm] = useState('');


    const onTermSubmit = () => {
        actionHandler(term);
    };

    return (
        <View style={style.background}>
            <Ionicons name="search" size={30} style={style.icons}></Ionicons>
            <TextInput
                style={style.TextInput}
                placeholder="Search"
                value={term}
                onChangeText={newTerm => setTerm(newTerm)}
                onEndEditing={onTermSubmit}
                autoCapitalize="none"
            >

            </TextInput>
        </View>
    );

};

const style = StyleSheet.create({
    background: {
        marginTop: 15,
        backgroundColor: '#d9d9d9',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop: 20,
        flexDirection: 'row',
        marginBottom: 10,
    },
    icons: {
        fontSize: 30,
        alignSelf: 'center',
        margin: 15,
    },
    TextInput:
    {
        flex: 1,
        fontSize: 18,
    }
});

export default SearchBar;