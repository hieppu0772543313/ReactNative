import React, { useState } from "react";
import { Button, HelperText, Text, TextInput } from "react-native-paper";
import { Alert, View, Image, StyleSheet } from "react-native";
import auth from '@react-native-firebase/auth';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState(false); // State để theo dõi lỗi email
    const [passwordError, setPasswordError] = useState(false); // State để theo dõi lỗi password

    const handleLogin = () => {
        if (!email.trim() || !password.trim()) {
            if (!email.trim()) {
                setEmailError(true);
            } else {
                setEmailError(false);
            }

            if (!password.trim()) {
                setPasswordError(true);
            } else {
                setPasswordError(false);
            }

            return;
        }

        auth().signInWithEmailAndPassword(email, password)
            .then(() => Alert.alert("Đăng nhập thành công"))
            .catch(e => Alert.alert("Đăng nhập thất bại", e.message));
    };

    return (
        <View style={styles.viewContainer}>
            <View style={styles.viewImage}>
                <Image
                    style={styles.image}
                    source={require('../assets/logofisebase.png')}
                />
            </View>
            <TextInput
                style={styles.textInput}
                label={"Email"}
                value={email}
                onChangeText={setEmail}
            />
            <HelperText type="error" visible={emailError}>
                Email không được để trống
            </HelperText>
            <TextInput
                style={styles.textInput}
                label={"Password"}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <HelperText type="error" visible={passwordError}>
                Password không được để trống
            </HelperText>
            <Button mode="contained"
                style={styles.button}
                onPress={handleLogin}
            >
                Đăng nhập
            </Button>
            <View style={styles.rowContainer}>
                <Text>
                    Don't have an account?
                </Text>
                <Button
                    style={styles.button}
                    onPress={() => navigation.navigate('Register')}
                >
                    Sign in
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 200,
        margin: 50,
        padding: 100,
    },
    viewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewImage: {
        alignItems: 'center'
    },
    textInput: {
        marginHorizontal: 20,
        marginBottom: 10,
        width: '80%'
    },
    button: {
        margin: 15
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Login;



/*import {Button, HelperText, Text, TextInput} from "react-native-paper"
import {Alert, View, Image, StyleSheet} from 'react-native'
import { useState } from "react"
import auth from '@react-native-firebase/auth'



const Login = ({navigation})=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin =()=>{
        auth().signInWithEmailAndPassword(email,password)
        .then(()=>Alert.alert("Dang nhap thanh cong"))
        .catch(e => Alert.alert(e.message))
    }
    return (
        
        <View style={MyStyle.viewContainer}>
           <View style = {MyStyle.ViewImage}>
                <Image
                    style ={MyStyle.image}
                    source={require('../assets/logofisebase.png')}
                />
           </View>
            <TextInput
                style = {MyStyle.TextInput}
                label={"Email"}
                value={email}
                onChangeText={setEmail}
            />
            <HelperText type="error">
                Email không hợp lệ
            </HelperText>
            <TextInput
                style = {MyStyle.TextInput}
                label={"Password"}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <HelperText type="error">
                Mat khau khong chinh xac
            </HelperText>
            <Button mode="contained"
                style ={{margin: 15}}
                onPress={handleLogin}
            >
                Login
            </Button>
            <View style={{flexDirection:"row", alignItems: 'center', justifyContent: 'center'}}>
                <Text>
                    Don't have an accout ?
                </Text>
                <Button style={{margin: 10}}
                    onPress={()=> navigation.navigate('Register')}>
                    Sign up
                </Button>
            </View>

            
        </View>
    )
}
const MyStyle = StyleSheet.create({
    image:{
        height: 200,
        width: 200,
        margin: 50,
        padding: 100,
        
      },
    viewContainer:{
        flex: 1,
        justifyContent: 'center',
   
      },
    ViewImage : {
        //flex: 1,
        alignItems: 'center'
    },
    TextInput:{
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 5
    
    } 
})
export default Login */