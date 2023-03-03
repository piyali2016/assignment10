import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './feature/store'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import FatfreeFood from './components/FatfreeFood';
import VeganFood from './components/VeganFood';
const Drawer = createDrawerNavigator();
export default function App() {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Fatfree" component={FatfreeFood} />
        <Drawer.Screen name="Vegan" component={VeganFood} />
      </Drawer.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
