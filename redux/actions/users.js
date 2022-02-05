import Axios from "axios"
import { GET_USERS } from "../constants/users"

export const getUser = (payload) => {
    return {
        type: GET_USERS,
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