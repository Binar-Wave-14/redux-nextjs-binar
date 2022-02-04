import {ADD_TODO} from '../constants/todos'

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}