import Axios from "axios"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getUserAction } from "../../redux/actions/users"

export async function getStaticProps() {
    const data = await Axios.get('https://jsonplaceholder.typicode.com/users')
    return {
        props: {
            users: data.data.map(val => {
                return {
                id: val.id,
                name: val.name,
                phone: val.phone,
                username: val.username,
                address: val.address.city
                }
            })
        },
        revalidate: 60
    }
}

// export async function getServerSideProps(context) {
//     const data = await Axios.get('https://jsonplaceholder.typicode.com/users')

//     return {
//       props: {
//         users: data.data.map(val => {
//             return {
//             id: val.id,
//             name: val.name,
//             phone: val.phone,
//             username: val.username,
//             address: val.address.city
//             }
//         })
//       },
//     }
// }

export default function Users(props) {
    const users = props.users

    return (
        <div>
            <h1>List User</h1>
            {
                users.length > 0 ? users.map(user => (
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