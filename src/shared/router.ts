import { prop, shared } from "realar";

export class Router {
  @prop hash = "";

  isActiveHash = (to: string) => {
    return this.hash === to || (to === "/" && this.hash === "");
  };

  private refreshHash = () => {
    let hash = window.location.hash;
    if (hash[0] === "#") {
      hash = hash.slice(1);
    }
    this.hash = hash;
  };

  constructor() {
    this.refreshHash();
    window.addEventListener("hashchange", this.refreshHash);
  }
}

export const sharedRouter = () => shared(Router);
