import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  ImageBackground,
  StyleSheet,
  Alert,
  TextInput,
  TouchableHighlight
} from 'react-native'


const App = ()=>{
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style = {myStyle.container}>
      <ImageBackground 
      source={require('../lab1/assets/bg1.jpg')} 
      resizeMode="cover"
      style ={myStyle.ImageBackground}>

        <Image 
          style ={myStyle.Image} 
          source ={require('../lab1/assets/bg.jpg')}
        />
        
      

      </ImageBackground>
      
    </View>
    )}
export default App;

const myStyle = StyleSheet.create(
  {
    container: {
      flex:1,
    },
    ImageBackground:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    Image:{    
      height: 300,
      width:350, 
    },
    
   
  }
)