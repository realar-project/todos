import { changed, unit } from "realar";

const LocalStorageTodosKey = "realar_todos";

export const Todos = unit({
  items: [],

  constructor() {
    this.load();
  },

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
      label,
      completed: false
    });
  },

  update(item, values) {
    this.items = this.items.map(v => ({
      ...v,
      ...(v === item ? values : {})
    }));
  },

  delete(item) {
    this.items = this.items.filter(v => v !== item);
  },
  deleteCompleted() {
    this.items = this.items.filter(item => !item.completed);
  },

  toggle(item) {
    this.update(item, {
      completed: !item.completed
    });
  },
  toggleAll() {
    const to = this.active.length > 0;
    this.items = this.items.map(item => ({
      ...item,
      completed: to
    }));
  },

  load() {
    const data = localStorage.getItem(LocalStorageTodosKey);
    try {
      const items = JSON.parse(data);
      if (items) {
        this.items = items;
      }
    }
    catch(e) { };
  },
  save() {
    localStorage.setItem(
      LocalStorageTodosKey,
      JSON.stringify(this.items)
    );
  },

  expression() {
    if (changed(this.items)) {
      this.save();
    }
  }
});
