import { useState } from "react";
import ToDo from "./components/toDo.js";
import AddTaskForm from "./components/addtaskForm.js";
import UpdateForm from "./components/updatedForm.js";

// import { FaCheckCircle, FaPen, FaTrashAlt } from "react-icons/fa";

import "./styles.css";

export default function App() {
  const [newTask, setNewTask] = useState("");
  const [toDo, setToDo] = useState([]);
  const [updated, setUpdated] = useState("");

  const addHandler = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo((prev) => {
        let updating = [...prev];
        updating.unshift(newEntry);
        return updating;
      });
      setNewTask("");
    }
  };

  const markHandler = (id) => {
    const newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  const delHandler = (id) => {
    let newTask = toDo.filter((task) => task.id !== id);
    setToDo(newTask);
  };

  const changeTask = (e) => {
    let newEntry = {
      id: updated.id,
      title: e.target.value,
      status: updated.status ? true : false,
    };

    setUpdated(newEntry);
  };

  const editHandler = (id) => {
    let filterRecords = [...toDo].filter((task) => task.id !== updated.id);
    let updatedObject = [...filterRecords, updated];
    setToDo(updatedObject);
    setUpdated("");
  };

  const cancelHandler = (id) => {
    setUpdated("");
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      {updated && updated ? (
        <UpdateForm
          updated={updated}
          changeTask={changeTask}
          editHandler={editHandler}
          cancelHandler={cancelHandler}
        />
      ) : (
        <AddTaskForm 
          newTask={newTask}
          setNewTask={setNewTask}
          addHandler={addHandler}
          />
      )}
      {toDo ? "" : "Nothing to display!"}  
      <ToDo
        toDo={toDo}
        markHandler={markHandler}
        delHandler={delHandler}
        setUpdated={setUpdated}

       />

    </div>
  );
}
