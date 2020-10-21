import React from "react";
import { useShared } from "realar";
import { Todo } from "../shared/todo";

export const ToggleAll = () => {
  const { active, toggleAll } = useShared(Todo);
  return (
    <>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={active.length === 0}
        onChange={toggleAll}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  )
};
