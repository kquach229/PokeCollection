import React, { useState } from "react";
import { View, Text , Button, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../styles/GlobalStyles";
import PokeDetails from "./PokeDetails";
import SearchBarComponent from "../components/SearchBar";
import PokeBanner from "../components/PokeBanner";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],
            filteredPokemon:[]
        }
    }

    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=27`)
            .then((res)=> res.json())
            .then((response)=> {
                this.setState({
                    isLoading: false,
                    // keep a temp to store all pokemons
                    pokemons: response.results,
                    dataSource: response.results,
                })
                console.log("RESPONSE",response)
                console.log("RESPONSE.RESSSULTS",response.results)
            })
           
    }

    filterPokemon = (textToSearch) => {
        // load all pokemons from temp
        const allPokemon = [...this.state.pokemons];
        this.setState({
            dataSource: allPokemon.filter(pokemon => pokemon.name.toLowerCase().includes(textToSearch.toLowerCase()))
        });
    }

    render() {
       
        const showIndicator = this.state.isLoading == true ? <ActivityIndicator size="large" color="#0000ff" /> : null;
        return(
            <View style={GlobalStyles.container}>
                <SearchBarComponent pokeFilter={this.filterPokemon} style={GlobalStyles.searchBar}/>
                <PokeBanner/>
                <View style={GlobalStyles.activityIndicator}>{showIndicator}</View>
                <View style={GlobalStyles.pokeFlatList}>
                <FlatList
                    contentContainerStyle={{paddingBottom: 70}}
                    keyExtractor={(item, index) => item.name}
                    numColumns={3}
                    data={this.state.dataSource} 
                    renderItem={({item})=> 
                    <View style={{flex: 1,justifyContent:"center", alignItems:"center", flexDirection: "row", marginBottom: 50, padding: 10}}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('PokeDetails', 
                    {item ,imageUrl: `https://projectpokemon.org/images/normal-sprite/${item.name}.gif`})}>
                        <PokeDetails imageUrl={`https://projectpokemon.org/images/normal-sprite/${item.name}.gif`} name={item.name}/>
                    </TouchableOpacity>
                    </View>
                    }/>
                </View>
            </View>
        )
    }
}

    
export default Home;