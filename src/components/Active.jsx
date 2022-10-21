import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Input from "./Input";
import Tasks from "./Tasks";

const Active = () => {
  const { tasks } = useContext(TodoContext);
  const active = tasks.filter((item) => item.completed !== true);
  const allActive = active.map((item) => <Tasks key={item.id} item={item} />);
  return (
    <div>
      <Input />
      <section className="tasks">{allActive}</section>
    </div>
  );
};

export default Active;
