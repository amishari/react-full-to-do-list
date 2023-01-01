import "../styles.css";
const AddTaskForm = ({ newTask, setNewTask, addHandler }) => {
  let lettets = /^[0-9-\u0600-\u06FF\s]+$/; /*only En Char: /^[a-zA-Z]+$/ */
  return (
    <div className="addTask">
      <input
        className={
          newTask.length === 0
            ? ""
            : newTask.match(lettets)
            ? "isCorrect"
            : "isError"
        }
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="addBtn" onClick={addHandler}>
        Add
      </button>
    </div>
  );
};
export default AddTaskForm;
