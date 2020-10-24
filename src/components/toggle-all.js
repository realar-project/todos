import React from "react";
import { useShared } from "realar";
import { Todos } from "../shared/todos";

export const ToggleAll = () => {
  const { active, toggleAll } = useShared(Todos);
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
