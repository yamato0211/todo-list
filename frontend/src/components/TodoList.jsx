import axios from 'axios'
import { useEffect, useState } from 'react'
import Todo from './Todo'
const DEFAULT_API_LOCALHOST = 'http://localhost:8000/todos'


const TodoList = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(DEFAULT_API_LOCALHOST)
            setTodos(result.data)
        }
        fetchData()
    }, [])
    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <Todo id={todo.id} title={todo.title} />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
