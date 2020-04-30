import React from "react";
import {View, StyleSheet, Image } from "react-native";
import { GlobalStyles } from "../styles/GlobalStyles";
import Banner from "../assets/images/banner.jpg";


const PokeBanner =()=> {
    return (
        <View style={GlobalStyles.searchBar}>
            <Image source={Banner} style={{height: 70, width: 400}} />
        </View>
      
    );
  
}

   
export default PokeBanner;
