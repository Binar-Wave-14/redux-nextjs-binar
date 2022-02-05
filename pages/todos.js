import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo, editTodo } from "../redux/actions/todos"

export default function Todos() {
    const dispatch = useDispatch()

    const todos = useSelector(store => store.todos)
    const [todo, setTodo] = useState('')
    const [idEdit, setIdEdit] = useState(0)

    const handleAddTodo = () => {
        dispatch(
            addTodo({
                id: Date.now(),
                content: todo
            })
        )

        setTodo('')
    }

    const handleDeleteTodo = (id) => () => {
        dispatch(
            deleteTodo(id)
        )
    }

    const handleEditTodo = () => {
        dispatch(
            editTodo({
                id: idEdit,
                content: todo
            })
        )

        setIdEdit(0)
        setTodo('')
    }

    return (
        <div>
            <h1>Todos App</h1>
            {
                todos && todos.data.length > 0 ? 
                todos.data.map(todo => (
                    <div key={todo.id} style={{display: 'flex', alignItems: 'center', width: '300px', justifyContent: 'space-between'}}>
                        <p>{todo.content}</p>
                        <div>
                            <button onClick={e => {
                                setTodo(todo.content)
                                setIdEdit(todo.id)
                            }}>Edit</button>
                            <button onClick={handleDeleteTodo(todo.id)}>Hapus</button>
                        </div>
                    </div>
                )) : (
                    <div>
                        <p>Loading</p>
                    </div>
                )
            }

            <div style={{width: '300px', justifyContent: 'space-between', display: 'flex'}}>
                <input style={{flex: 1}} type="text" name="todo" id="todo" value={todo} onChange={e => setTodo(e.target.value)} />
                <button onClick={idEdit > 0 ? handleEditTodo : handleAddTodo}>Simpan</button>
            </div>
        </div>
    )
}