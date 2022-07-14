import React , {useContext, useState} from 'react'
import { DataContext } from './DataProvider'
const Footer = () => {
  const [checkAll, setcheckAll] = useState(false)
  const [todos, setTodos] =useContext(DataContext)
  const handleCheckAll =() =>{
    const newTodos = [...todos]
    newTodos.forEach(todo => {
      todo.complete = !checkAll
    })
    setTodos(newTodos)
    setcheckAll(!checkAll)
  }

  const deleteTodo =() =>{
    const newTodos = todos.filter(todo =>{
      return todo.complete === false
    })
    setTodos(newTodos)
    setcheckAll(false)
  }
  return (
    <div className='row'>
    <label htmlFor='all'> 
    <input type="checkbox" name="all" id="all"
    onClick={handleCheckAll} checked={checkAll}/>
    ALL
    
    </label>
  <p>You have {todos.length} to do</p>
  <button id="delete" onClick={deleteTodo} >delete</button>
  </div>

  )
}

export default Footer