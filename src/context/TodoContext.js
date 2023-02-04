import React, { createContext, useState, useContext } from "react";

const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState([
    {
      id: "1",
      task: "Learn JavaScript",
      completed: false,
    },
  ]);

  const values = {
    tasks,
    setTasks,
    filter,
    setFilter,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("useTodo is undefined");
  }
  return context;
};
export default TodoContext;
