import {useState} from "react";
import "./styles.css";
const UpdateForm ({updated,changeTask,editHandler,cancelHandler })=>{
    return(
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
        

    )
}
export default UpdateForm;