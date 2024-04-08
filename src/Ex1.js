import React from "react";
import {
  View,
  Text,
  StyleSheet
} from 'react-native'


const App = ()=> 
{
  return (
    <View style ={myStyle.ViewStyle}>
      <Text style ={myStyle.TextStye}>Hello World</Text>
    </View>
  );
}

export default App;
const myStyle = StyleSheet.create(
  {
ViewStyle: {
  width: 100,
  height: 100,
  //flex: 1,
  backgroundColor: 'aqua',
  alignItems: 'center',
  justifyContent: 'center',
},
TextStye:{
  color:'red',
  fontWeight: 'bold',
  fontStyle: 'italic',
  fontSize: 20
}
  }
)