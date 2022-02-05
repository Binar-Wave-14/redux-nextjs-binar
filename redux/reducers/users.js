import {GET_USERS} from '../constants/users'

export const initialState = {
    data: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state
    }
}