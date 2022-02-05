import {ADD_TODO, DELETE_TODO} from '../constants/todos'

export const initialState = {
    data: [
        {
            id: 1,
            content: 'Lari pagi'
        },
        {
            id: 2,
            content: 'Lari siang'
        }
    ]
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                data: [
                    ...state.data,
                    action.payload
                ]
            }
        case DELETE_TODO:
            return {
                ...state,
                data: state.data.filter(val => val.id !== action.payload)
            }
        default:
            return state
    }
}