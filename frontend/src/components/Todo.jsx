import axios from "axios"
import styles from './style.module.css'
const DEFAULT_API_LOCALHOST = 'http://localhost:8000/todos'


const Todo = (props) => {
    const handleDelete = () => {
        axios.delete(`${DEFAULT_API_LOCALHOST}/${props.id}`)
            .then(res => console.log(res))
        setTimeout(() => {
            window.location.reload()
        }, 200)
    }
    return (
        <div className={styles.todo}>
            <p className={styles.text}>{props.title}</p>
            <button type="button" onClick={handleDelete} className={styles.button}>完了</button>
        </div>
    )
}

export default Todo