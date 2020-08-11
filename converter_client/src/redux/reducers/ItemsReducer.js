import { ADD_ITEMS, SET_ERROR, CLEAR_ERROR } from "./types"

const initialState = {
    items:[],
    error: null
}


export const ItemsReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_ITEMS:
            return {
                ...state,
                items:[...state.items, ...action.payload]
            }

        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
            
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }
            
        default: return state    
    }
}