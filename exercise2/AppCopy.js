import HomeScreen from './exercise2/HomeScreen';
import DetailsScreen from './exercise2/DetailsScreen';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import CustomNavigationBar from './exercise2/CustomNavigationBar';
import React from 'react';
import { StyleSheet } from 'react-native';
const Stack=createStackNavigator();
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'
        screenOptions={{
          header:(props)=><CustomNavigationBar {...props}/>
        }}>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Details' component={DetailsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
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
