import React from "react";
import {
  View,
  Button,
  Text,
  Touchable,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

export default ()=>
{
  return(
    <View style = {myStyle.container}>
      <Button title = "Click lan 1" onPress={()=>alert("Hello you!")}/>

      <TouchableOpacity style = {myStyle.button} onPress={()=> alert("Hello ban!")}>
        <Text style = {myStyle.text}>
          Clik lan 2
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const myStyle = StyleSheet.create(
{
  container:{
    flex: 1,
    justifyContent: 'center'
  },
  button:{
    backgroundColor: "blue",
    marginTop: 15,
    alignItems: 'center',
    padding: 10,
  
  },
  text:
  {
    color: 'white',
    fontSize: 18,
  }

}
)