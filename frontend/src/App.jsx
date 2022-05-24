import Title from "./components/Title"
import InputForm from "./components/InputForm"
import TodoList from "./components/TodoList"
import { createContext, useState } from "react"
import app from "./App.module.css"

export const TodoContext = createContext()

export default function App() {
  const [todos, setTodos] = useState([])
  const value = {
    todos,
    setTodos
  }
  return (

    <div className={app.app}>
      <TodoContext.Provider value={value}>
        <Title />
        <InputForm />
        <TodoList />
      </TodoContext.Provider>
    </div>


  )
}