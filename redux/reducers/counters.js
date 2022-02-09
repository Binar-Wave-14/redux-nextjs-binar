import {DECREMENT_COUNTER, INCREMENT_COUNTER, UPDATE_COUNTER} from '../constants/conters'

export const initialState = {
    value: 0,
    maxQty: 10,
    minQty: 0
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            if (state.value === state.maxQty) {
                action.payload = 0
            }

            return {
                ...state,
                value: state.value + action.payload
            }
        case DECREMENT_COUNTER:
            if (state.value === state.minQty) {
                action.payload = 0
            }

            return {
                ...state,
                value: state.value - action.payload
            }
        case UPDATE_COUNTER:
            if (action.payload < state.minQty) {
                action.payload = state.minQty
            } else if (action.payload > state.maxQty) {
                action.payload = state.maxQty
            }

            return {
                ...state,
                value: action.payload
            }
        default:
            return state
    }
}