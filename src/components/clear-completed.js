import React from "react";
import { useShared } from "realar";
import { Todo } from "../shared/todo";

export const ClearCompleted = () => {
  const { completed, deleteCompleted } = useShared(Todo);

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
