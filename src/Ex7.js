import React from "react";
import { useState } from "react";
import{
  TextInput,
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';
const myStyle = StyleSheet.create({
  container:{
    padding: 20,
  },
  label:{
    fontWeight: "bold",
    fontSize: 20,
  },
  input: {
    marginTop: 10,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 10,
    borderRadius: 5,
  },
});
export default ()=>{
  const [name, setName]= useState("");
  return(
    <View style={myStyle.container}>
      <Text style ={myStyle.label}>
        what is your name, plz?
      </Text>
      <TextInput
        style ={myStyle.input}
        placeholder="Hoang Hiep ne!"
        placeholderTextColor="rgba(0, 0, 0, 0.5)"
        onChangeText={(text) => setName(text)}
      />
      <Button
        title="Say hello"
        onPress={()=> {
          alert(`Hello, ${name}!`);
          setName("")
        }}
      />
    </View>
  );
};


