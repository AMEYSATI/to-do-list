import React, { useState } from "react";
import axios from "Axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isActive, setIsActive] = useState([]);
  const [changeInputs, setInput] = useState("");

  function taskInput(event) {
    setInput(event.target.value);
  }

  function addTask() {
    setTasks((prev) => {
      return [...prev, changeInputs];
    });

    setIsActive((prev) => {
      return [...prev, false];
    });

    setInput("");
  }

  function doneTask(index) {
    setIsActive((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    const updatedDoneTask = isActive.filter((active,i)=>i!==index);
    setTasks(updatedTasks);
    setIsActive(updatedDoneTask);
  }

  return (
    <div>
      <div>
        <h1 className="title">To-Do List</h1>
        <h3 className="subtitle">Add your tasks</h3>
      </div>
      <div className="container">
        <input
          onChange={taskInput}
          type="text"
          id="tasks"
          placeholder="Enter your tasks"
          value={changeInputs}
        />
        <button className="add" onClick={addTask} type="submit">
          +
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <span style={{ textDecoration: isActive[index] ? "line-through" : "none" }}
              onClick={() => doneTask(index)}>
                 {task}
              </span>
              <button onClick={() => deleteTask(index)} className="delete" type="submit">
                D
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
