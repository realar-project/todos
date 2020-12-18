import React from "react";
import { Link } from "./link";
import { sharedTodos } from "../shared/todos";
import { ClearCompleted } from "./clear-completed";

export const Footer = () => {
  const todos = sharedTodos();

  if (todos.empty) {
    return null;
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.active.length}</strong> items left
      </span>
      <ul className="filters">
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/active">Active</Link>
        </li>
        <li>
          <Link to="/completed">Completed</Link>
        </li>
      </ul>
      <ClearCompleted />
    </footer>
  );
};
