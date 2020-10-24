import React from "react";
import { shared, unit, useOwn } from "realar";
import { Router } from "../shared/router";

const Logic = unit({
  router: shared(Router),

  activeClassName: "",
  to: "/",

  constructor(activeClassName, to) {
    this.activeClassName = activeClassName;
    this.to = to;
    console.log("Link:ctor", to);
  },

  get className() {
    console.log("Link:get:className", this.to, this.router.hash);
    if (this.router.hash === this.to) {
      return this.activeClassName;
    }
    if (this.to === "/" && this.router.hash === "") {
      return this.activeClassName;
    }
  },
  get href() {
    return "#" + this.to;
  },

});

export const Link = ({ activeClassName, children, to }) => {
  const { className, href } = useOwn(Logic, activeClassName, to);
  return (
    <a className={className} href={href}>{children}</a>
  )
};
