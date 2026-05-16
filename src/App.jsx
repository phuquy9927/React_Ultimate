


// () => { }




import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
const App = () => {

 const hoidanit = "qui";
 const age = 25;
 const data = {
  address: "hn",
  country: "vietnam"
 }

 const addNewTodo = (name) => {
  alert(`call me ${name}`)
 }
 

  return (
   <div className="todo-container">
    <div className="todo-title">Todo List</div>
    <TodoNew
      addNewTodo={addNewTodo}
    />
   <TodoData
   name ={hoidanit}
   age={age}
   data={data}
   
   ></TodoData>

   <div className='todo-image'>
    <img src={reactLogo} className='logo'></img>
   </div>
   
   </div>
  )
}

export default App
