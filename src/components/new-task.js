import React from "react";
import { shared, unit, useOwn } from "realar";
import { Todos } from "../shared/todos";

const Logic = unit({
  todos: shared(Todos),
  label: "",

  handleChange(ev) {
    this.label = ev.target.value;
  },
  handleKeyDown(ev) {
    if (ev.nativeEvent.code === "Enter") {
      const label = this.label.trim();
      if (label) {
        this.todos.add(label);
        this.label = "";
      }
    }
  },
});

export const NewTask = () => {
  const { label, handleChange, handleKeyDown } = useOwn(Logic);
  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={label}
    />
  );
};
