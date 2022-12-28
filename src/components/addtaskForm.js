import {useState} from 'react';
import "./styles.css";
const AddTaskForm ({ newTask, setNewTask, addHandler})=>{
    return(
       
       <div className="addTask">
          <input
            className=""
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="" onClick={addHandler}>
            Add
          </button>
        </div>
        
    )

}
export default AddTaskForm;