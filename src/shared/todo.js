import { unit } from "realar";

export const Todo = unit({
  items: [],

  get empty() {
    return this.items.length === 0;
  },
  get completed() {
    return this.items.filter(item => item.completed);
  },
  get active() {
    return this.items.filter(item => !item.completed);
  },

  add(label) {
    this.items = this.items.concat({
      label
    });
  },

  delete() {},
  deleteCompleted() {
    this.items = this.items.filter(item => !item.completed);
  },

  toggleAll() {
    const to = this.active.length > 0;
    this.items = this.items.map(item => ({
      ...item,
      completed: to
    }));
  },
});
