import { useReducer, useState } from "react"
import { LoginContext } from "./loginContext"
import { store, deauthorize, hide_profile, show_profile, authorize } from "../types"
import { loginReducer } from "./LoginReducer"

export const LoginState = ({children}) => {
    const [state,dispatch] = useReducer(loginReducer, {visible:false})
    const show = (user) => {
        dispatch({
            type: show_profile,
            payload: user
        })
        store.dispatch({type:authorize})
    
    }
    const hide = () => {
        dispatch({type: hide_profile})
        store.dispatch({type:deauthorize})
    
    }
    return(
        <LoginContext.Provider value={{
            show, hide, login:state 
        }}>
            {children}
        </LoginContext.Provider>
    )
}