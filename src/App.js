import styled from 'styled-components'
import TodoItem from './TodoItem'
// eslint-disable-next-line
import { useState, useRef } from 'react'

// eslint-disable-next-line
const BlackTodoItem = styled(TodoItem)`
  background: black;
`
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

  // eslint-disable-next-line
  const handleTogglerIsDone = id => {
    setTodos(todos.map(todo => {
        // eslint-disable-next-line
        if(todo.id != id) return todo
        return {
          ...todo,
          isDone: !todo.isDone
        }
      }
    ))
  }

  // eslint-disable-next-line
  const titleSize = "XL"
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
