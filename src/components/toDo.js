import {useState} from 'react';
import { FaCheckCircle, FaPen, FaTrashAlt } from "react-icons/fa";
import "./styles.css";

const ToDo = ({toDo, markHandler,delHandler, setUpdated})=>{
    return (
        <>
         {toDo &&
                toDo
                .sort((a, b) => (a.id > b.id ? 1 : -1))
                .map((task, index) => {
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
    

        </>
        )
}
  

export default ToDo;
