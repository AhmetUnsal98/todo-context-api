import React from "react";
import { useTodo } from "../../context/TodoContext";

const Item = ({ item }) => {
  const { tasks, setTasks } = useTodo();

  const handleClickComplete = (id) => {
    const cloned_tasks = [...tasks];
    const itemIndex = cloned_tasks.findIndex((task) => task.id === id);
    const item = tasks[itemIndex];
    item.completed = !item.completed;
    setTasks(cloned_tasks);
  };

  const handleClickRemove = (id) => {
    alert("Remove");
    const cloned_tasks = [...tasks];
    const new_items = cloned_tasks.filter((t) => t.id !== id);
    setTasks(new_items);
  };

  return (
    <div className="list-container">
      <div
        onClick={() => {
          handleClickComplete(item.id);
        }}
        className={`checkbox ${item.completed === true ? "completed" : ""}`}
      ></div>
      <p className={`tasks ${item.completed === true ? "completed" : ""}`}>
        {item.task}
      </p>
      <p
        onClick={() => {
          handleClickRemove(item.id);
        }}
      >
        x
      </p>
    </div>
  );
};

export default Item;
