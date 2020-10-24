import React, { useRef } from "react";
import { effect, shared, unit, useOwn } from "realar";
import { Todos } from "../shared/todos";

const Logic = unit({
  todos: shared(Todos),

  editing: false,
  inputRef: null,
  item: null,
  label: "",

  constructor(item, inputRef) {
    this.item = item;
    this.inputRef = inputRef;

    effect(() => {
      window.addEventListener("click", this.handleBodyClick);
      window.addEventListener("keydown", this.handleBodyKeyDown);
      console.log("Item:link", this.item);
      return () => {
        console.log("Item:unlink", this.item);
        window.removeEventListener("click", this.handleBodyClick);
        window.removeEventListener("keydown", this.handleBodyKeyDown)
      }
    })
  },

  get className() {
    if (this.editing) return "editing";
    if (this.item.completed) return "completed";
  },

  inputFocus() {
    const input = this.inputRef.current;
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  },

  handleBodyClick(ev) {
    const input = this.inputRef.current;
    if (input && input !== ev.target) {
      this.editing = false;
    }
  },
  handleBodyKeyDown(ev) {
    if (ev.code === "Escape") {
      this.editing = false;
    }
  },

  handleInputChange(ev) {
    this.label = ev.target.value;
  },
  handleInputKeyDown(ev) {
    if (ev.nativeEvent.code === "Enter") {
      const label = this.label.trim();
      if (label) {
        this.todos.update(this.item, { label });
        this.label = "";
        this.editing = false;
      }
    }
  },
  handleInputDoubleClick() {
    this.editing = true;
    this.label = this.item.label;
    this.inputFocus();
  },
  handleDestroyClick() {
    this.todos.delete(this.item);
  },
  handleToggleClick() {
    this.todos.toggle(this.item);
  },

});


export const TodoItem = ({ item }) => {
  const editorRef = useRef(null);
  const {
    className,
    label,
    handleDestroyClick,
    handleToggleClick,
    handleInputChange,
    handleInputDoubleClick,
    handleInputKeyDown,
  } = useOwn(Logic, item, editorRef);

  console.log("Item:render");
  console.log("Item:className", className);

  return (
    <li className={className}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={item.completed}
          onChange={handleToggleClick}
        />
        <label onDoubleClick={handleInputDoubleClick}>{item.label}</label>
        <button className="destroy" onClick={handleDestroyClick} />
      </div>
      <input
        className="edit"
        value={label}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        ref={editorRef}
      />
    </li>
  )
};
