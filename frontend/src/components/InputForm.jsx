import axios from "axios";
import { useState, useContext } from "react"
import { TodoContext } from "../App";
import styles from './style.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const DEFAULT_API_LOCALHOST = 'http://localhost:8000/todos'

const InputForm = () => {
    const { todos, setTodos } = useContext(TodoContext)
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (text === "") {
            alert("内容を入力してください")
            return;
        }
        await axios.post(DEFAULT_API_LOCALHOST, {
            "title": text,
            "done": false
        })
            .then(res => console.log(res.data))
        setText("")
        const result = await axios.get(DEFAULT_API_LOCALHOST)
        setTodos(result.data)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="タスクを入力してください。"
                value={text} onChange={handleChange} className={styles.input} />
            <button type="submit"><FontAwesomeIcon icon={faPlus} /></button>
        </form>
    )
}

export default InputForm;

