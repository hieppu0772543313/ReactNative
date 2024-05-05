import Login from './KTGK/Login';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth'
import Register from './KTGK/Register';
import "react-native-gesture-handler"
import Router from './route/MyStack';
import MyStack from './route/MyStack';

const App =()=> {
    return (
      
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
      //<Login/>
      //<Register/> 
    )
}

export default App
