import React from "react";
import { useShared } from "realar";
import { Todo } from "../shared/todo";
import { Filter } from "../shared/filter";
import { ToggleAll } from "./toggle-all";
import { TodoItem } from "./todo-item";

export const TodoList = () => {
  const { empty } = useShared(Todo);
  const { items } = useShared(Filter);

  if (empty) {
    return null;
  }

  // TODO: realar babel plugin bug
  return (
    <section className="main">
      <ToggleAll />
      <ul className="todo-list">
        {items.map((item, index) => <TodoItem key={index} item={item} />)}
      </ul>
    </section>
  )
};
