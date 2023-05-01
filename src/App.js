import React, {useState} from 'react';
import './App.css';

function App() {
  
  const [tasks, setTasks] = useState([
    {name: "Buy Shopping", highPriority: false},
    {name: "Clean Bathroom", highPriority: false},
    {name: "Cancel Economist", highPriority: true}
  ])

  const [newTask, setNewTask] = useState("")

  const taskNodes = tasks.map((task, index) => {
    return(
      <li key={index} className={task.priority ? "high-priority" : "low-priority"}>
      <span>{task.name}</span>
      </li>
    )
  })
  
  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  }

  const saveNewTask = (event) => {
    event.preventDefault()
    const copyTasks = [...tasks]
    copyTasks.push({name: newTask, highPriority: newTask})
    setTasks(copyTasks)
    setNewTask("")
  }

  const handlePriorityInput = (event) => {
    setNewTask(event.target.value)
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <br></br>

      <form onSubmit={saveNewTask}>
        <label htmlFor="new-task">Add a new task:</label>
        <input id="new-task" type="text" value={newTask} onChange={handleTaskInput}/>
        <input type="radio" id="high" name="priority" value={true} onChange={handlePriorityInput}/>
        <label for="high">High</label>
        <input type="radio" id="low" name="priority" value={false} onChange={handlePriorityInput}/>
        <label for="low">Low</label>
        <input type="submit" value="Save Task"/>      
      </form>

      <ul>
        {taskNodes}
      </ul>

    </div>
  );
}

export default App;
