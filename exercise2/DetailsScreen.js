import React from "react";
import {StyleSheet,View} from 'react-native';
import { Text } from "react-native-paper";
const DetailsScreen=()=>{
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Details Screen</Text>
        </View>
    )
}
export default DetailsScreen;
const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        },
        text:{
            color:'black'
        }
    }
)