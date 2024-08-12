import { combineReducers } from 'redux'
import commonReducer from './commonReducer'


const appReducer = combineReducers({
    commonReducer,
})

export const rootReducer = (state, action) => {
   
    return appReducer(state, action)
}