import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItem1 from "./components/TodoItem1"
import TodoItem2 from "./components/TodoItem2"
import './App.css'
function App() {

  return (
    <>
      <center class='todo-container'>
        <AppName />
        <div class="container">
          <AddTodo />
          <div className="items-container">
            <br />
            <br />
            <TodoItem1 />
            <br />
            <br />
            <TodoItem2 />
          </div>
        </div>
      </center>
    </>
  )
}

export default App
