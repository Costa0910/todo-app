import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
const Input = () => {
  const { addTasks } = useContext(TodoContext);
  const [task, setTask] = useState("");

  function handleTask() {
    if (task) {
      const newTask = {
        id: nanoid(),
        completed: false,
        task: task,
      };
      addTasks(newTask);
      setTask("");
    }
  }

  return (
    <div className="add">
      <input
        type="text"
        placeholder="add details"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button onClick={handleTask} className="add-task">
        Add
      </button>
    </div>
  );
};

export default Input;
