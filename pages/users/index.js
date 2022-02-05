import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getUserAction } from "../../redux/actions/users"

export default function Users() {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    useEffect(() => {
        dispatch(
            getUserAction()
        )
    }, [dispatch])

    return (
        <div>
            <h1>List User</h1>
            {
                users.data.length > 0 ? users.data.map(user => (
                    <div key={user.id}>
                        <p>Nama: {user.name}</p>
                        <p>No. HP: {user.phone}</p>
                        <p>Alamat: {user.address}</p>
                        <p>Username: {user.username}</p>
                        <hr />
                    </div>
                )) : (
                    <div>
                        <p>Loading</p>
                    </div>
                )
            }
        </div>
    )
}