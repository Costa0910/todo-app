import { createContext, useState } from "react";

export const TodoContext = createContext();

const allTasks = [
  {
    id: 1,
    completed: false,
    task: "Do coding challenges",
  },
  {
    id: 2,
    completed: true,
    task: "Do coding challenges",
  },
  {
    id: 3,
    completed: false,
    task: "Do coding challenges",
  },
];

const TodoProvider = ({ children }) => {
  const [tasks, setTask] = useState(allTasks);

  // Update new Task
  function addTasks(newTask) {
    setTask((prevState) => [...prevState, newTask]);
  }

  function toggleCompleted(id) {
    // data initialed with number
    const idNum = Number(id) || id;
    setTask((prevState) => {
      // const oldState = [...prevState];
      const newTasks = prevState.map((item) => {
        if (item.id === idNum) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });
      return newTasks;
    });
  }

  // delete completed task
  function deleteTask(id) {
    const numId = Number(id) || id;
    setTask((prevState) => {
      return prevState.filter((item) => item.id !== numId);
    });
  }

  // delete completed tasks
  function deleteAll() {
    setTask((prevState) => {
      return prevState.filter((item) => item.completed !== true);
    });
  }

  return (
    <TodoContext.Provider
      value={{
        tasks,
        addTasks,
        toggleCompleted,
        deleteTask,
        deleteAll,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
