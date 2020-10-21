import React from "react";
import { NewTask } from "./new-task";

export const Header = () => (
  <header className="header">
    <h1>todos</h1>
    <NewTask />
  </header>
);
