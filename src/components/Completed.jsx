import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Tasks from "./Tasks";

const Completed = () => {
  const { tasks, deleteTask, deleteAll } = useContext(TodoContext);
  const completed = tasks.filter((item) => item.completed === true);

  const allCompleted = completed.map((item) => (
    <div key={item.id} className="completed">
      <Tasks item={item} />
      <span
        className="material-symbols-outlined"
        onClick={(e) => deleteTask(e.target.id)}
        id={item.id}
      >
        delete_forever
      </span>
    </div>
  ));
  return (
    <section className="tasks">
      {allCompleted}
      {allCompleted.length > 1 && (
        <div className="delete">
          <button onClick={deleteAll} className="delete-all">
            <span className="material-symbols-outlined">delete_forever</span>
            delete all
          </button>
        </div>
      )}
    </section>
  );
};

export default Completed;
