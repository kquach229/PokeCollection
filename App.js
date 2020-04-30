import 'react-native-gesture-handler';
import React from 'react';
import { View , StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"
import Home from "./screens/Home";
import About from "./screens/About";
import PokeDetails from "./screens/PokeDetails";




const App =()=> {

  const Stack = createStackNavigator();

  return(
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="PokeDetails" component={PokeDetails}/>
          <Stack.Screen name="About" component={About}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
  


export default App;
