import {AuthorReducer} from './authorReducer'
import {combineReducers} from 'redux-starter-kit'

const rootReducer=combineReducers({
    AuthorReducer
})
const appReducer=(state,action)=>{
    return rootReducer(state,action)
}

export default appReducer
