import React from "react";
import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"tomato",
        padding: 0,
    },
    pokeDetailsContainer: {
        flex:1,
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",

    },
    title: {
        fontSize: 50,
        backgroundColor:"yellow",

    },
    activityIndicator: {
        flex: 1,
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center"
    },
    pokeDetailsName: {
        fontFamily: 'Forum',
        fontSize: 30
    },
    pokeText: {
        fontFamily: 'Forum',
        fontSize: 15
    },
    searchBar: {
        marginBottom: 0,
    },
    pokeFlatList: {
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center", 
        marginTop:30
    }
})


