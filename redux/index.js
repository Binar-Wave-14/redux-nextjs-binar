import { applyMiddleware, combineReducers, createStore } from 'redux'
import { todosReducer } from './reducers/todos'
import thunk from 'redux-thunk'
import { userReducer } from './reducers/users'

const rootReducer = combineReducers({
    todos: todosReducer,
    users: userReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))