import { useReducer } from "react"
import { AlertContext } from "./alertContext"
import { hide_alert, show_alert } from "../types"
import { alertReducer } from "./alertReducer"

export const AlertState = ({children}) => {
    const [state,dispatch] = useReducer(alertReducer, {visible:false})
    const show = (text,type = 'warning') => {
        dispatch({
            type: show_alert,
            payload:{text,type}
        })
    }
    const hide = () => dispatch({type: hide_alert})
    
    return(
        <AlertContext.Provider value={{
            show, hide,
            alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
}