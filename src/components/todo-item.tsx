import React, { useEffect, useLayoutEffect } from "react";
import { box, use } from "realar";
import { sharedTodos, Todo } from "../shared/todos";

class Form {
  todos = sharedTodos();

  @box editing = false;
  @box label = "";

  todo: Todo;
  inputRef: React.RefObject<HTMLInputElement>;

  get input() {
    return this.inputRef.current;
  }
  get className() {
    if (this.editing) return "editing";
    if (this.todo.completed) return "completed";
  }

  handleBodyClick = (event: MouseEvent) => {
    if (this.input && this.input !== event.target) {
      this.editing = false;
    }
  };
  handleBodyKeyDown = (event: KeyboardEvent) => {
    if (event.code === "Escape") {
      this.editing = false;
    }
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.label = event.target.value;
  };
  handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.code === "Enter") {
      const trimmed = this.label.trim();
      if (trimmed) {
        this.todos.update(this.todo, { label: trimmed });
        this.label = "";
        this.editing = false;
      }
    }
  };
  handleInputDoubleClick = () => {
    this.editing = true;
    this.label = this.todo.label;
  };

  handleDestroyClick = () => {
    this.todos.remove(this.todo);
  };
  handleToggleClick = () => {
    this.todos.toggle(this.todo);
  };

  focus = () => {
    if (this.input && this.editing) {
      this.input.focus();
      this.input.setSelectionRange(0, this.input.value.length);
    }
  };

  effect = () => {
    window.addEventListener("click", this.handleBodyClick);
    window.addEventListener("keydown", this.handleBodyKeyDown);
    return () => {
      window.removeEventListener("click", this.handleBodyClick);
      window.removeEventListener("keydown", this.handleBodyKeyDown);
    };
  };

  constructor(todo: Todo) {
    this.todo = todo;
    this.inputRef = React.createRef();
  }
}

interface Props {
  todo: Todo;
}

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const form = use(Form, [todo]);
  useEffect(() => form.effect(), [form]);
  useLayoutEffect(() => form.focus(), [form.editing, form]);

  return (
    <li className={form.className}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={form.handleToggleClick}
        />
        <label onDoubleClick={form.handleInputDoubleClick}>{todo.label}</label>
        <button className="destroy" onClick={form.handleDestroyClick} />
      </div>
      <input
        className="edit"
        value={form.label}
        onChange={form.handleInputChange}
        onKeyDown={form.handleInputKeyDown}
        ref={form.inputRef}
      />
    </li>
  );
};
