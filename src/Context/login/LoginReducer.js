import { hide_profile, show_profile } from "../types"

const handlers ={
    [show_profile]: (state,{payload}) => ({...payload,visible:true}),
    [hide_profile]: (state) => ({...state, visible: false}),
    default: state => state
}
export const loginReducer = (state,action) => {
    const handle = handlers[action.type] || handlers.default
    return handle(state,action)
}