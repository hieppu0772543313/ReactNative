import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = (props) => (
  <TouchableOpacity
    onPress={props.onPress}
    style={{
      backgroundColor: "#ff637c",
      alignSelf: "center",
      padding: 30,
      margin: 10,
      ...props.buttonStyle,
    }}>
      {/* Truyền giá trị của prop text vào trong thẻ Text */}
      <Text style={{ color: "aqua" }}>{props.text}</Text>
  </TouchableOpacity>
);

export default () => (
  <View style={{ flex:1, justifyContent:'center' }}>
    {/* Truyền giá trị text vào prop text của component Button */}
    <Button text="hello" onPress={() => alert("hello")}/>
    <Button 
      text="goodbye" 
      onPress={() => alert("goodbye see you late!")}
      buttonStyle={{ backgroundColor: '#4dc2c2'}}
    />
  </View>
);
