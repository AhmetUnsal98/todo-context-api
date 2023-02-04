import React, { useEffect, useState } from "react";
import { useTodo } from "../../context/TodoContext";
import Item from "./Item";
import "./list.scss";
const List = () => {
  const { tasks, setTasks, filter, setFilter } = useTodo();
  let filtered = tasks;
  if (filter !== "all") {
    filtered = tasks.filter((task) =>
      filter === "complete"
        ? task.completed === true && task
        : task.completed === false && task
    );
  }

  useEffect(() => {
    console.log(tasks);
  });

  return (
    <div className="list-main-container">
      {filtered?.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
};

export default List;
