import React, { useState } from "react";
import { FaCheckCircle, FaPen, FaTrashAlt } from "react-icons/fa";

import "./styles.css";

export default function App() {
  const [newTask, setNewTask] = useState("");
  const [toDo, setToDo] = useState([]);
  const [updated, setUpdated] = useState("");

  const addHandler = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
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
        <div className="update">
          <input
            className=""
            value={updated.title}
            onChange={(e) => changeTask(e)}
          />
          <div className="actions">
            <button onClick={editHandler}>Update</button>
            <button onClick={cancelHandler}>Cancel</button>
          </div>
        </div>
      ) : (
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
      )}

      {toDo ? "" : "Nothing to display!"}
      {toDo &&
        toDo.map((task, index) => {
          return (
            <div key={task.id} className="task-wrap">
              <div className={!task.status ? "tasks" : "done"}>
                <span className="task-number">{index + 1}</span>
                <span className="task-title">{task.title}</span>
              </div>

              <span className="iconwrap">
                <FaCheckCircle
                  className="mark"
                  onClick={(id) => markHandler(task.id)}
                  title="Done"
                />
                {task.status ? null : (
                  <FaPen
                    className="edit"
                    onClick={() =>
                      setUpdated({
                        id: task.id,
                        title: task.title,
                        status: task.status ? true : false,
                      })
                    }
                    title="Edit"
                  />
                )}

                <FaTrashAlt
                  className="del"
                  onClick={(id) => delHandler(task.id)}
                  title="Delete"
                />
              </span>
            </div>
          );
        })}
    </div>
  );
}
