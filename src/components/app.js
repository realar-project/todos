import React from "react";
import { Header } from "./header";
import { TodoList } from "./todo-list";
import { Footer } from "./footer";

export const App = () => (
  <>
    <section className="todoapp">
      <Header />
      <TodoList />
      <Footer />
    </section>
    <footer className="info">
      <p>Double-click to edit a todo</p>
      <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
    </footer>
  </>
);
