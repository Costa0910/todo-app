import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Tasks = ({ item }) => {
  const { toggleCompleted } = useContext(TodoContext);
  const isStrikethrough = item.completed ? "strikethrough" : undefined;
  return (
    <label className={isStrikethrough}>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={(e) => toggleCompleted(e.target.id)}
        id={item.id}
      />
      {item.task}
    </label>
  );
};

export default Tasks;
