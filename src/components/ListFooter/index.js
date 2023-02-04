import React, { useState } from "react";
import "./listfooter.scss";
import { useTodo } from "../../context/TodoContext";
const ListFooter = () => {
  const { tasks, setTasks, filter, setFilter } = useTodo();

  return (
    <div className="list-footer-container">
      <p>All List</p>
      <div
        onClick={() => {
          setFilter("all");
        }}
        className={"filter-box-all" + " " + filter}
      ></div>
      <p>Completed</p>
      <div
        onClick={() => {
          setFilter("complete");
        }}
        className={"filter-box-comp" + " " + filter}
      ></div>
      <p>Active</p>
      <div
        onClick={() => {
          setFilter("active");
        }}
        className={"filter-box-act" + " " + filter}
      ></div>
      <p
        onClick={() => {
          setTasks([]);
        }}
      >
        Clean All Tasks
      </p>
    </div>
  );
};

export default ListFooter;
