import {useState} from "react";
import {
  ImageBackground, 
  StyleSheet,
  Switch,
  Text,TextInput,
  TouchableHighlight,
  View,
  Image,
  Alert,} from "react-native"
  
  const styles = StyleSheet.create({
	container: {
	  flex: 1,
	},	
	TextInput:{
		fontSize:20,
		fontWeerght:"bold",
		borderWidth:1,
		borderColor:'#0000FF',
		margin:10
	},
	button:{
		backgroundColor:"aqua",
		height:50,
		borderRadius:10,
		justifyContent:"center",
		alignItems:"center",
		margin:5,
	},
	buttonText:{
		color:"#FF1493",
		fontSize:20,
		fontWeight:"bold"
	},
  text:{
    fontWeight:'bold',
    margin: 20,
    textAlign: 'right',
    color: 'aqua'
  },
  image:{
    height: 300,
    width: 300,
    margin: 50,
    padding: 100
  }
  });

const App = () =>{
	const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const onPress =()=>
  {
    Alert.alert(`Dang nhap thanh cong voi username: =${username}`);
  }
  return(
	<View style={styles.container}>
		<ImageBackground source={require('../lab1/assets/bg1.jpg')} style={{flex:1}}>
    <Image style ={styles.image} source={require('../lab1/assets/bg.jpg')}/>
    <Text style= {styles.text}>
      REGISTER
    </Text>
		<TextInput 
        style={styles.TextInput}
        onChangeText={setUsername}
        placeholder="Nhap user name"
        value={username}
      />
      <TextInput
        style={styles.TextInput}
        onChangeText={setPassword}
        placeholder="Nhap password"
        secureTextEntry
        value={password}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={onPress}
          >
            <Text style={styles.buttonText}>
              Login
            </Text>
        </TouchableHighlight>
		</ImageBackground>
  	</View>
)
}
export default App;