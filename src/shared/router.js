import { effect, unit } from "realar";

export const Router = unit({
  hash: "",

  constructor() {
    this.refreshHash();
    this.listenHashChange();
  },

  refreshHash() {
    let hash = window.location.hash;
    if (hash[0] === "#") {
      hash = hash.slice(1);
    }
    this.hash = hash;
  },

  listenHashChange() {
    effect(() => {
      window.addEventListener("hashchange", this.refreshHash);
      return () => {
        window.removeEventListener("hashchange", this.refreshHash);
      }
    })
  },

});
