import React, { useState, useEffect } from "react";
import { View, Text , ActivityIndicator} from "react-native";
import {GlobalStyles} from "../styles/GlobalStyles";
import { Image } from 'react-native-elements';


const PokeDetails =(props)=> {


console.log("props is",props);
console.disableYellowBox = true;

const [pokemonDetails, setPokemonDetails] = useState([]);


async function fetchData() {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.route.params.item.name}`);
        const data = await res.json()
        setPokemonDetails(data);
        console.log("DATA!!!!!!!!!!!",data);
        console.log("Data.weight", data.weight);
        console.log("data.ID!!!!!!!!!!!!",data.id);
        console.log("PROPS!!!!!!", props);
        }

useEffect(()=> {
    fetchData()
}, [])


if(props.navigation == undefined)
{
    return(
        <View>  
            <Image PlaceholderContent={<ActivityIndicator size="large" color="#0000ff"/>} source={{uri: props.imageUrl}} style={{height: 50, width: 50}}/>
            <Text style={GlobalStyles.pokeText}>{props.name}</Text>
        </View>
    )
}
else{
    return(
        <View style={GlobalStyles.pokeDetailsContainer}>  
                <Image PlaceholderContent={<ActivityIndicator size="large" color="#0000ff"/>} source={{uri: props.route.params.imageUrl}} style={{height: 105, width: 100}}/>
                <Text style={GlobalStyles.pokeDetailsName}>{props.route.params.item.name}</Text>
                <Text>Index#{pokemonDetails.id}</Text>
                <Text>Weight: {pokemonDetails.weight} pounds</Text>
                <Text>Height: {pokemonDetails.height} inches</Text>
        </View>
    )
}
}

export default PokeDetails;