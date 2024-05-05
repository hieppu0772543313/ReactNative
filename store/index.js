import { createContext, useReducer } from "react";

const MyContext = createContext()
MyContext.displayName = 'My Store'

const reducer = (state,action)=>{
    switch(action.type)
    {
        case "USER_LOGIN":
            return{...state, userLogin:action.value}
            break;
        case "LOGOUT":
            return{...state, userLogin:null};
            break;
        default:
            return new Error ("Action khong ton tai")
    }
}

const MyContextControllerProvider = ()=>{
    const initialState ={
        userLogin:{},
        job:[]
    }
    const [controller, dispatch] = useReducer(reducer, initialState)
    
}