import React from "react";
import { sharedTodos } from "../shared/todos";

export const ClearCompleted = () => {
  const todos = sharedTodos();

  if (todos.completed.length === 0) {
    return null;
  }

  return (
    <button className="clear-completed" onClick={todos.removeCompleted}>
      Clear completed
    </button>
  );
};
