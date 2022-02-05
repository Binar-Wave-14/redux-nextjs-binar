import Axios from "axios"
import { GET_DETAIL, GET_USERS } from "../constants/users"

export const getUser = (payload) => {
    return {
        type: GET_USERS,
        payload
    }
}

export const getDetail = (payload) => {
    return {
        type: GET_DETAIL,
        payload
    }
}

export const getUserAction = () => async (dispatch) => {
    const {data} = await Axios.get('https://jsonplaceholder.typicode.com/users')

    const payload = data.map(val => {
        return {
            id: val.id,
            name: val.name,
            phone: val.phone,
            username: val.username,
            address: val.address.city
        }
    })

    return dispatch(
        getUser(payload)
    )
}

export const getUserDetailAction = (id) => async (dispatch) => {
    if (id) {
        const {data} = await Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const payload =  {
            id: data.id,
            name: data.name,
            phone: data.phone,
            username: data.username,
            address: data.address.city
        }

        return dispatch(
            getDetail(payload)
        )
    }
}