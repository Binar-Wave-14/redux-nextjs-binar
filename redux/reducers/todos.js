import {ADD_TODO, DELETE_TODO, EDIT_TODO} from '../constants/todos'

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
        case EDIT_TODO:
            return {
                ...state,
                data: changeTodoByPayload(action.payload, state.data)
            }
        default:
            return state
    }
}

const changeTodoByPayload = (payload, data) => {
    return data.map(val => {
        if (val.id === payload.id) {
            val.content = payload.content
        }

        return val
    })
}