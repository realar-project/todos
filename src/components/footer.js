import React from "react";
import { useShared } from "realar";
import { Link } from "./link";
import { Todos } from "../shared/todos";
import { ClearCompleted } from "./clear-completed";

export const Footer = () => {
  const { empty, active } = useShared(Todos);

  if (empty) {
    return null;
  }

  return (
    <footer className="footer">
      <span className="todo-count"><strong>{active.length}</strong> item left</span>
      <ul className="filters">
        <li>
          <Link activeClassName="selected" to="/">All</Link>
        </li>
        <li>
          <Link activeClassName="selected" to="/active">Active</Link>
        </li>
        <li>
          <Link activeClassName="selected" to="/completed">Completed</Link>
        </li>
      </ul>
      <ClearCompleted />
    </footer>
  );
}
