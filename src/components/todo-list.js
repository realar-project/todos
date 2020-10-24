import React from "react";
import { shared, unit, useOwn, useShared } from "realar";
import { Todos } from "../shared/todos";
import { Router } from "../shared/router";
import { ToggleAll } from "./toggle-all";
import { TodoItem } from "./todo-item";

const Filter = unit({
  todo: shared(Todos),
  router: shared(Router),

  get items() {
    switch (this.router.hash) {
      case "/active":
        return this.todo.active;
      case "/completed":
        return this.todo.completed;
      default:
        return this.todo.items;
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
