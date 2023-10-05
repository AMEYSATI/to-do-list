import React, {useState} from "react";
import AddTasks from "./AddTasks";

function App(){
    const [task,setTask] = useState("Study");
    var temp;

    function taskInput(event){
        temp = event.target.value
    }

    function addTask(){
        setTask(temp);
    }

    return(
        <div>
            <div>
                <h1 className="title">To Do List</h1>
                <h3 className="subtitle">Add your tasks</h3>
            </div>
            <div className="container">
                <input onChange={taskInput} type="text" id="tasks" placeholder="Enter your tasks"/>
                <button onClick={addTask} type="submit">+</button>
            </div>
            <div>
                <ul>
                    <li>{task}</li>
                </ul>
            </div>
        </div>
    )
}

export default App;