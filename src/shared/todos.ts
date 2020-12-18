import { sel, box, reaction, shared } from "realar";

export interface Todo {
  label: string;
  completed: boolean;
}

export class Todos {
  @box items: Todo[] = [];

  get empty() {
    return this.items.length === 0;
  }
  @sel get active() {
    return this.items.filter((item) => !item.completed);
  }
  @sel get completed() {
    return this.items.filter((item) => item.completed);
  }

  add = (label: string) => {
    this.items = this.items.concat({
      label,
      completed: false
    });
  };
  update = (todo: Todo, values: Partial<Todo>) => {
    this.items = this.items.map((item) => ({
      ...item,
      ...(item === todo ? values : {})
    }));
  };

  toggle = (todo: Todo) => {
    this.update(todo, { completed: !todo.completed });
  };
  toggleAll = () => {
    const to = this.active.length > 0;
    this.items = this.items.map((item) => ({
      ...item,
      completed: to
    }));
  };

  remove = (todo: Todo) => {
    this.items = this.items.filter((item) => item !== todo);
  };
  removeCompleted = () => {
    this.items = this.items.filter((item) => !item.completed);
  };

  constructor() {
    const data = localStorage.getItem("todos");
    if (data) {
      this.items = JSON.parse(data);
    }

    reaction(
      () => this.items,
      (items) => {
        localStorage.setItem("todos", JSON.stringify(items));
      }
    );
  }
}

export const sharedTodos = () => shared(Todos);
