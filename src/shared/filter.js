import { shared, unit } from "realar";
import { Todo } from "./todo";

export const Filter = unit({
  todo: shared(Todo),
  select: "all",

  get items() {
    switch (this.select) {
      case "active":
        return this.todo.active;
      case "completed":
        return this.todo.completed;
      default:
        return this.todo.items;
    }
  },
});
