import { ADD_ITEMS, SET_ERROR, CLEAR_ERROR } from "../reducers/types"

export const AddItemsAction = (payload) => {
    return {
        type:ADD_ITEMS,
        payload
    }
}

export const SetErrorAction = () => {
    return {
        type:SET_ERROR,
        payload: "Error connection to server"
    }
}

export const ClearErrorAction = () => {
    return {
        type:CLEAR_ERROR
        
    }
}