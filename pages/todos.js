import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "../redux/actions/todos"

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

    return (
        <div>
            <h1>Todos App</h1>
            {
                todos && todos.data.length > 0 ? todos.data.map(todo => (
                    <p key={todo.id}>{todo.content}</p>
                )) : (
                    <div>
                        <p>Loading</p>
                    </div>
                )
            }

            <div>
                <input type="text" name="todo" id="todo" value={todo} onChange={e => setTodo(e.target.value)} />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
        </div>
    )
}