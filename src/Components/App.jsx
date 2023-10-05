import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isActive, setIsActive] = useState([]);
  var temp;

  function taskInput(event) {
    temp = event.target.value;
  }

  function addTask() {
    setTasks((prev) => {
      return [...prev, temp];
    });

    setIsActive((prev) => {
      return [...prev, false];
    });
  }

  function deleteTask(index) {
    setIsActive((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  }

  return (
    <div>
      <div>
        <h1 className="title">To-Do List</h1>
        <h3 className="subtitle">Add your tasks</h3>
      </div>
      <div className="container">
        <input onChange={taskInput} type="text" id="tasks" placeholder="Enter your tasks" />
        <button onClick={addTask} type="submit">
          +
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li
              style={{ textDecoration: isActive[index] ? 'line-through' : 'none' }}
              onClick={() => deleteTask(index)}
              key={index}
            >
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
