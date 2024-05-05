import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button,Text } from 'react-native-paper';
const HomeScreen=({navigation}) =>{
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button mode="contained" onPress={()=>navigation.navigate('Details')}>
        Go to Details
      </Button>
    </View>
  );
}
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
