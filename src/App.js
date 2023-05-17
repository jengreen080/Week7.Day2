import './App.css';
import { useState } from 'react';

function App() {

//===================================================

  const [tasks, setTasks] = useState([
    { id: 1, name: "Buy shopping" , priority: true},
    { id: 2, name: "Clean bathroom", priority: true},
    { id: 3, name: "Car's MOT", priority: false}
  ]);

const [newTask, setNewTask] = useState("")
// const [priority, setNewPriority] = useState(false)

//===================================================
  
const listOfTasks = tasks.map((task) => {
    return(
      <li className ={task.priority === true ? "high" : "low"}
      key = {task.id}>
      {task.name}
      </li>
    )
  })

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }
  // please get this explained

  const saveNewTask = (event) => {
    event.preventDefault()

    const newTaskObject = {id: Date.now(), name: newTask}
    const nextTasks = [...tasks, newTaskObject]
    setTasks(nextTasks)
    setNewTask("")
  }

//===================================================
  
return(
    <main className = "App">
      <h1>List of tasks</h1>
      <hr></hr>
      <ul>
        {listOfTasks} 
        {/* {tasks.priority === "High" ? < className = "high"> : className = "low"} */}
      </ul>
      <form onSubmit = {saveNewTask}>
        <label htmlFor = 'new-item'> Add a new item:</label>
        <input id = 'new-item' type = 'text' value = {newTask} onChange = {handleTaskInput}/>
        <input type = 'submit' value = "Save new item"/>
      </form>
    </main>
    
  );

  // <h1>Shopping List - {items.length ? "Keep shopping" : "Finished!"}</h1>

}

export default App;






// function App() {

//   const [items, setItems] = useState([
//     {id: 1, name: "milk"},
//     {id: 2, name: "chocolate"},
//     {id: 3, name: "ice-cream"}
//   ])

//   const [newItem, setNewItem] = useState("")

//   const purchaseItem = (itemId) => {
//     // console.log("Purchase button clicked on:", itemId)
//     const newItems = items.filter((item) => item.id !== itemId)
//     setItems(newItems)
//   }

//   const listItems = items.map((item) => {
//     return(
//       <li key = {item.id}>
//       {item.name}
//       <button onClick = {() => purchaseItem(item.id)}>Purchase</button>
//       </li>
//     )
    
//   })
//   const handleItemInput = (event) => {
//     setNewItem(event.target.value)
//   }
//   const saveNewItem = (event)=> {
//     event.preventDefault()

//     const newItemObject = {id: Date.now(), name: newItem}
//     const nextItems = [...items, newItemObject] 
//     // three dots is a spread operator
//     // above is making a new array as we're not allowed to mutate the inital array
//     setItems(nextItems)
//     setNewItem("")
//   }

  

//   return(
//     <div className = "App">
//     <h1>Shopping List - {items.length ? "Keep shopping" : "Finished!"}</h1>
//     {/* ternary statement? */}
//     <hr></hr>

//     <ul>
//       {listItems}
//     </ul>

//     <form onSubmit = {saveNewItem}>
//       <label htmlFor = 'new-item'>Add a new item:</label>
//       <input id = 'new-item' type = 'text' value = {newItem} onChange = {handleItemInput}/>
//       <br></br>
//       <input type = 'submit' value = "Save new item"/>
    
//     </form>
//     </div>
//   );
// }



