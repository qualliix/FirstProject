import { hide_alert, show_alert } from "../types"

const handlers ={
    [show_alert]: (state,{payload}) => ({...payload,visible:true}),
    [hide_alert]: (state) => ({...state, visible: false}),
    default: state => state
}
export const alertReducer = (state,action) => {
    const handle = handlers[action.type] || handlers.default
    return handle(state,action)
}