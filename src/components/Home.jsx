import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import Input from "./Input";
import Tasks from "./Tasks";
const Home = () => {
  const { tasks } = useContext(TodoContext);
  const all = tasks.map((item) => <Tasks key={item.id} item={item} />);
  return (
    <div>
      <Input />
      <section className="tasks">{all}</section>
    </div>
  );
};

export default Home;
