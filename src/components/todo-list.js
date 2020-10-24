import React from "react";
import { shared, unit, useOwn, useShared } from "realar";
import { Todos } from "../shared/todos";
import { Router } from "../shared/router";
import { ToggleAll } from "./toggle-all";
import { TodoItem } from "./todo-item";

const Filter = unit({
  todos: shared(Todos),
  router: shared(Router),

  get items() {
    switch (this.router.hash) {
      case "/active":
        return this.todos.active;
      case "/completed":
        return this.todos.completed;
      default:
        return this.todos.items;
    }
  },
});

export const TodoList = () => {
  const { empty } = useShared(Todos);
  const { items } = useOwn(Filter);

  if (empty) {
    return null;
  }

  return (
    <section className="main">
      <ToggleAll />
      <ul className="todo-list">
        {items.map((item, index) => <TodoItem key={index} item={item} />)}
      </ul>
    </section>
  )
};
