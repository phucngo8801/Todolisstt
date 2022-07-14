import React, {useState, useContext} from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { DataContext } from './DataProvider'
function Forminput ()  {
 
    const [todos, setTodos ] = useContext(DataContext);
    const [todoName, setTodoName , ] = useState('');
    const addTodo = e  =>{
        e.preventDefault();
        setTodos([...todos, {name: todoName, complete: false}])
        setTodoName('');
    
          
        if(todoName) {return  toast('🦄 cảm ơn đã điền thông tin  ', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        }
    }
   
      
    
     
  return (
    <form autoComplete="off" onSubmit={addTodo}>
        <input type='text' name='todos' id='todos'
        required placeholder='What needs to be done?' value={todoName} 
        onChange={e => setTodoName(e.target.value.toLowerCase())}/><ToastContainer />
        <button type="submit">Create</button>
        

      </form>
  )
}

export default Forminput