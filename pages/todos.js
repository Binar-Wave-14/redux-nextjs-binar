import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo } from "../redux/actions/todos"

export default function Todos() {
    const dispatch = useDispatch()

    const todos = useSelector(store => store.todos)
    const [todo, setTodo] = useState('')

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

    return (
        <div>
            <h1>Todos App</h1>
            {
                todos && todos.data.length > 0 ? 
                todos.data.map(todo => (
                    <div key={todo.id} style={{display: 'flex', alignItems: 'center', width: '250px', justifyContent: 'space-between'}}>
                        <p>{todo.content}</p>
                        <button onClick={handleDeleteTodo(todo.id)}>Hapus</button>
                    </div>
                )) : (
                    <div>
                        <p>Loading</p>
                    </div>
                )
            }

            <div style={{width: '250px', justifyContent: 'space-between', display: 'flex'}}>
                <input style={{flex: 1}} type="text" name="todo" id="todo" value={todo} onChange={e => setTodo(e.target.value)} />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
        </div>
    )
}