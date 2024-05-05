import {Button, Text, TextInput} from "react-native-paper"
import {Alert, View} from 'react-native'
import { useState } from "react"
import auth from '@react-native-firebase/auth'

const Register = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleCreateAccount =()=>{
        auth().createUserWithEmailAndPassword(email, password)
        .then(()=>Alert.alert("Dang ky thanh cong"))
        .catch(e => Alert.alert(e.message))
    }
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <TextInput
            label={"Email"}
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
            label={"Password"}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button mode="contained"
                onPress={handleCreateAccount}
            >
                Create Account
            </Button>

            
        </View>
    )
}

export default Register 