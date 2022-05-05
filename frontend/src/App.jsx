import Title from "./components/Title"
import InputForm from "./components/InputForm"
import TodoList from "./components/TodoList"
import app from "./App.module.css"
export default function App() {
  return (
    <div className={app.app}>
      <Title />
      <InputForm />
      <TodoList />
    </div>
  )
}