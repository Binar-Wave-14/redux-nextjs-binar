import { applyMiddleware, combineReducers, createStore } from 'redux'
import { todosReducer } from './reducers/todos'
import thunk from 'redux-thunk'
import { userReducer } from './reducers/users'
import {counterReducer} from './reducers/counters'

const rootReducer = combineReducers({
    todos: todosReducer,
    users: userReducer,
    counters: counterReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))