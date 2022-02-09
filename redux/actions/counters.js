import { DECREMENT_COUNTER, INCREMENT_COUNTER, UPDATE_COUNTER } from "../constants/conters"

export const incrementCounterAction = () => {
    return {
        type: INCREMENT_COUNTER,
        payload: 1
    }
}

export const decrementCounterAction = () => {
    return {
        type: DECREMENT_COUNTER,
        payload: 1
    }
}

export const updateCounterAction = (payload) => {
    return {
        type: UPDATE_COUNTER,
        payload
    }
}