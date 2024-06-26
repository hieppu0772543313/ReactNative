import {createStackNavigator} from '@react-navigation/stack'
import Login from '../KTGK/Login'
import Register from '../KTGK/Register'
import Home from '../KTGK/Home'
const Stack = createStackNavigator()
const MyStack =()=>{
    return(
        <Stack.Navigator
            initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
    )
}
export default MyStack;