import React from "react";
import {View, StyleSheet } from "react-native";
import { SearchBar } from 'react-native-elements';
import { GlobalStyles } from "../styles/GlobalStyles";


class SearchBarComponent extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (text) => {
    this.setState({ search: text });
    this.props.pokeFilter(this.state.search);
  }



  render() {
    const { search } = this.state;
    console.log(search)
    return (
        <View style={GlobalStyles.searchBar}>
            <SearchBar
                placeholder="Search pokemon..."
                onChangeText={this.updateSearch} 
                value={search}
            />
        </View>
      
    );
  }
}


export default SearchBarComponent;