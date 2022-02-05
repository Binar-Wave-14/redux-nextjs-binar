import { useRouter } from "next/router"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getUserDetailAction } from "../../redux/actions/users"

export default function UserDetail() {
    const router = useRouter()
    const {slug} = router.query

    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    useEffect(() => {
        dispatch(
            getUserDetailAction(slug)
        )
    }, [dispatch, slug])

    return (
        <div>
            <h1>Detail User</h1>
            <p>Nama: {users.detail.name}</p>
            <p>No. HP: {users.detail.phone}</p>
            <p>Alamat: {users.detail.address}</p>
            <p>Username: {users.detail.username}</p>
        </div>
    )
}