import axios from "axios"
import { TodoContext, TextContext } from "../App"
import { useContext } from "react"
import styles from './style.module.css'
const DEFAULT_API_LOCALHOST = 'http://localhost:8000/todos'


const Todo = (props) => {
    const { todos, setTodos } = useContext(TodoContext)
    const { text, setText } = useContext(TextContext)
    const handlePut = async () => {
        await axios.put(`${DEFAULT_API_LOCALHOST}/${props.id}`, {
            "title": text,
            "done": false
        }).then(res => console.log(res.data))
        setText('')
        const result = await axios.get(DEFAULT_API_LOCALHOST)
        setTodos(result.data)
    }
    const handleDelete = async () => {
        await axios.delete(`${DEFAULT_API_LOCALHOST}/${props.id}`)
            .then(res => console.log(res))
        const result = await axios.get(DEFAULT_API_LOCALHOST)
        setTodos(result.data)
    }
    return (
        <div className={styles.todo}>
            <p className={styles.text}>{props.title}</p>
            <button type="button" onClick={handlePut} className={styles.button}>編集</button>
            <button type="button" onClick={handleDelete} className={styles.button}>完了</button>
        </div>
    )
}

export default Todo