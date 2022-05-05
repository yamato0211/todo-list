import axios from "axios";
import { useState } from "react"
import styles from './style.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const DEFAULT_API_LOCALHOST = 'http://localhost:8000/todos'

const InputForm = () => {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value)
        console.log(text)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text == "") {
            alert("内容を入力してください")
            return;
        }
        axios.post(DEFAULT_API_LOCALHOST, {
            "title": text,
            "done": false
        })
            .then(res => console.log(res.data))
        setText("")
        setTimeout(() => {
            window.location.reload()
        }, 200)
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

