import React from "react";
import { sharedTodos } from "../shared/todos";

export const ToggleAll = () => {
  const todos = sharedTodos();
  return (
    <>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={todos.active.length === 0}
        onChange={todos.toggleAll}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  );
};
