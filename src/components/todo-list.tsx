import React from "react";
import { sel, use } from "realar";
import { sharedTodos } from "../shared/todos";
import { sharedRouter } from "../shared/router";
import { ToggleAll } from "./toggle-all";
import { TodoItem } from "./todo-item";

class Filter {
  router = sharedRouter();
  todos = sharedTodos();

  @sel get items() {
    switch (this.router.hash) {
      case "/active":
        return this.todos.active;
      case "/completed":
        return this.todos.completed;
      default:
        return this.todos.items;
    }
  }
}

export const TodoList = () => {
  const todos = sharedTodos();
  const filter = use(Filter);

  if (todos.empty) {
    return null;
  }

  return (
    <section className="main">
      <ToggleAll />
      <ul className="todo-list">
        {filter.items.map((item, index) => (
          <TodoItem key={index} todo={item} />
        ))}
      </ul>
    </section>
  );
};
