import {GET_DETAIL, GET_USERS} from '../constants/users'

export const initialState = {
    data: [],
    detail: {}
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                data: action.payload,
            }
        case GET_DETAIL:
            return {
                ...state,
                detail: action.payload
            }
        default:
            return state
    }
}