import {Button, HelperText, Text, TextInput} from "react-native-paper"
import {Alert, View, Image, StyleSheet} from 'react-native'
import { useState } from "react"
import auth from '@react-native-firebase/auth'

const Register = ({navigation})=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullname, setFullname] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const [errors, setErrors] = useState({
        fullname: false,
        email: false,
        password: false,
        confirmpassword: false
    });

    const handleCreateAccount =()=>{
        let errorsFound = false;
        let newErrors = { ...errors };

        if (!fullname.trim()) {
            newErrors.fullname = true;
            errorsFound = true;
        } else {
            newErrors.fullname = false;
        }

        if (!email.trim()) {
            newErrors.email = true;
            errorsFound = true;
        } else {
            newErrors.email = false;
        }

        if (password.length < 6) {
            newErrors.password = true;
            errorsFound = true;
        } else {
            newErrors.password = false;
        }

        if (password !== confirmpassword) {
            newErrors.confirmpassword = true;
            errorsFound = true;
        } else {
            newErrors.confirmpassword = false;
        }

        setErrors(newErrors);

        if (!errorsFound) {
            auth().createUserWithEmailAndPassword(email, password)
            .then(()=>Alert.alert("Dang ky thanh cong"))
            .catch(e => Alert.alert(e.message))
        }
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
                style ={MyStyle.TextInput}
                label={"Full name"}
                value={fullname}
                onChangeText={setFullname}
           />
           {/* Hiển thị HelperText chỉ khi người dùng nhấn nút "Create Account" và trường này còn trống */}
           {errors.fullname && <HelperText type="error">
                Full Name không được để trống
           </HelperText>}
            <TextInput
                style ={MyStyle.TextInput}
                label={"Email"}
                value={email}
                onChangeText={setEmail}
            />
            {errors.email && <HelperText type="error">
                Email không được để trống
           </HelperText>}
            <TextInput
                style ={MyStyle.TextInput}
                label={"Password"}
                value={password}
                onChangeText={setPassword}
                secureTextEntry    
            />
            {errors.password && <HelperText type="error">
                Password phải có ít nhất 6 ký tự
           </HelperText>}
            <TextInput
                style ={MyStyle.TextInput}
                label={"Confirm Password"}
                value={confirmpassword}
                onChangeText={setConfirmpassword}
                secureTextEntry    
            />
            {errors.confirmpassword && <HelperText type="error">
                Password không khớp
           </HelperText>}
            <Button mode="contained"
                style = {{margin: 10}}
                onPress={handleCreateAccount}
            >
                Create Account
            </Button>
            <View style={{flexDirection:"row", alignItems: 'center', justifyContent: 'center'}}>
                <Text>
                    Already got an accout ?
                </Text>
                <Button style={{margin: 10}}
                    onPress={()=> navigation.navigate('Login')}>
                    Log in
                </Button>
            </View>
        </View>
    )
}
const MyStyle =StyleSheet.create({
    image:{
        height: 100,
        width: 100,
        margin: 50,
        padding: 50,
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
        marginBottom: 5,
    }
})
export default Register


/*import {Button, HelperText, Text, TextInput} from "react-native-paper"
import {Alert, View, Image, StyleSheet} from 'react-native'
import { useState } from "react"
import auth from '@react-native-firebase/auth'

const Register = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullname, setFullname] = useState("")
    const [confirmpassword, setConfirmpassword] =useState("")
    
    const handleCreateAccount =()=>{
        auth().createUserWithEmailAndPassword(email, password)
        .then(()=>Alert.alert("Dang ky thanh cong"))
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
                style ={MyStyle.TextInput}
                label={"Full name"}
                value={fullname}
                onChangeText={setFullname}
           />
            {isTyping && <HelperText type="error">
                Full Name khong duoc de trong
           </HelperText>}
            <TextInput
                style ={MyStyle.TextInput}
                label={"Email"}
                value={email}
                onChangeText={setEmail}
            />
            <HelperText type="error">
                Email khong duoc de trong
           </HelperText>
            <TextInput
                style ={MyStyle.TextInput}
                label={"Password"}
                value={password}
                onChangeText={setPassword}
                secureTextEntry    
            />
            <HelperText type="error">
                Password it nhat 6 ky tu
           </HelperText>
            <TextInput
                style ={MyStyle.TextInput}
                label={"Confirm Password"}
                value={confirmpassword}
                onChangeText={setConfirmpassword}
                secureTextEntry    
            />
            <HelperText type="error">
                Password khong khop
           </HelperText>
            <Button mode="contained"
                style = {{margin: 10}}
                onPress={handleCreateAccount}
            >
                Create Account
            </Button>

            
        </View>
    )
}
const MyStyle =StyleSheet.create({
    image:{
        height: 100,
        width: 100,
        margin: 50,
        padding: 50,
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
        marginBottom: 5,
       
    }
})
export default Register */