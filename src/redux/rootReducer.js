import { authorize, deauthorize } from "../Context/types"

export function rootReducer(state,action) {
    if (action.type === authorize) {
        return state = true
    }
    if (action.type === deauthorize) {
        return state = false
    }
    return state }