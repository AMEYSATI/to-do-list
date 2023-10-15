import React, { useState } from "react";

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

  function toggleTask(index) {
    const newActive = [...isActive];
    newActive[index] = !newActive[index];
    setIsActive(newActive);
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
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
              <span
                onClick={() => toggleTask(index)}
                style={{
                  textDecoration: isActive[index] ? "line-through" : "none"
                }}
              >
                {task}
              </span>
              <button onClick={() => deleteTask(index)} className="delete">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
