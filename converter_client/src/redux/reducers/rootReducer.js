import {combineReducers} from 'redux'
import {ItemsReducer} from '../reducers/ItemsReducer'

export default combineReducers({
    items:ItemsReducer
})