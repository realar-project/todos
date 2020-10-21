import React from "react";
import { useShared } from "realar";
import { Link } from "./link";
import { Todo } from "../shared/todo";
import { Filter } from "../shared/filter";
import { ClearCompleted } from "./clear-completed";

export const Footer = () => {
  const { empty, active } = useShared(Todo);
  const { select } = useShared(Filter);

  if (empty) {
    return null;
  }

  return (
    <footer className="footer">
      <span className="todo-count"><strong>{active.length}</strong> item left</span>
      <ul className="filters">
        <li>
          <Link className={select === "all" ? "selected" : ""} to="/">All</Link>
        </li>
        <li>
          <Link className={select === "active" ? "selected" : ""} to="/active">Active</Link>
        </li>
        <li>
          <Link className={select === "completed" ? "selected" : ""} to="/completed">Completed</Link>
        </li>
      </ul>
      <ClearCompleted />
    </footer>
  );
}
