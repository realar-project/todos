import React from "react";
import { useShared } from "realar";
import { Todos } from "../shared/todos";

export const ClearCompleted = () => {
  const { completed, deleteCompleted } = useShared(Todos);

  if(completed.length === 0) {
    return null;
  }

  return (
    <button
      className="clear-completed"
      onClick={deleteCompleted}
    >Clear completed</button>
  );
}
