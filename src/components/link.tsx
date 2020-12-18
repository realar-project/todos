import React from "react";
import { sharedRouter } from "../shared/router";

interface Props {
  to: string;
}

export const Link: React.FC<Props> = ({ children, to }) => {
  const router = sharedRouter();

  const className = router.isActiveHash(to) ? "selected" : undefined;
  const href = `#${to}`;

  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
};
