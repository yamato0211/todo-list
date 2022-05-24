import Title from "./components/Title"
import InputForm from "./components/InputForm"
import TodoList from "./components/TodoList"
import { createContext, useState } from "react"
import app from "./App.module.css"

export const TodoContext = createContext()
export const TextContext = createContext()

export default function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')
  const value = {
    todos,
    setTodos
  }
  const context = {
    text,
    setText
  }
  return (

    <div className={app.app}>
      <TodoContext.Provider value={value}>
        <TextContext.Provider value={context} >
          <Title />
          <InputForm />
          <TodoList />
        </TextContext.Provider>
      </TodoContext.Provider>
    </div>


  )
}