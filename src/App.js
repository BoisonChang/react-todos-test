import TodoItem from './TodoItem'
import { useState} from 'react'

let id = 3
function App() {
  const [todos, setTodos] = useState([
    {id: 1, content: 'example', isDone: true},
    {id: 2, content: 'not done', isDone: false}
  ])  // 這個叫做一個 hook

  const [value, setValue] = useState('')

  const handleButtonClick = () => {
    setTodos([ ...todos, 
      {
        id,
        content: value
      }])
    setValue('')
    id++
  }

  const handleDeleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

 
  const handleTogglerIsDone = id => {
    setTodos(todos.map(todo => {
        if(todo.id !== id) return todo
        return {
          ...todo,
          isDone: !todo.isDone
        }
      }
    ))
  }

  return (
    <div className="App">
      <input type="text" placeholder="todo" value={value} onChange={handleInputChange}/>
      <button onClick={handleButtonClick}>Add todo</button>
      {
        todos.map( todo => <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleTogglerIsDone={handleTogglerIsDone}/>)
      }
    </div>
  )
}

export default App;
