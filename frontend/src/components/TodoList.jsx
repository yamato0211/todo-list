import axios from 'axios'
import { useContext, useEffect } from 'react'
import { TodoContext } from '../App'
import style from "./style.module.css"
import Todo from './Todo'
const DEFAULT_API_LOCALHOST = 'http://localhost:8000/todos'


const TodoList = () => {
    const { todos, setTodos } = useContext(TodoContext)
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(DEFAULT_API_LOCALHOST)
            setTodos(result.data)
        }
        fetchData()
    }, [setTodos])
    return (
        <div>
            <ul className={style.ul}>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <Todo id={todo.id} title={todo.title} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;
