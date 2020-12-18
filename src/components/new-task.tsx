import React from "react";
import { box, use } from "realar";
import { sharedTodos } from "../shared/todos";

class Form {
  todos = sharedTodos();

  @box label = "";

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.label = event.target.value;
  };
  handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.code === "Enter") {
      const trimmed = this.label.trim();
      if (trimmed) {
        this.todos.add(trimmed);
        this.label = "";
      }
    }
  };
}

export const NewTask = () => {
  const form = use(Form);

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
      onChange={form.handleChange}
      onKeyDown={form.handleKeyDown}
      value={form.label}
    />
  );
};
