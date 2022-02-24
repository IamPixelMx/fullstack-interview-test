import React from "react";
import { useRouter, history } from "router";

type Props = {
  to: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
  className?: string;
};

const Link = React.memo(
  ({ to, children, onClick, className = "", ...rest }: Props) => {
    const { route } = useRouter();

    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      // If it's not a valid new path the function will not trigger.
      if (route.path === to) return;

      if (onClick) onClick(e);
      history.push(to);
    };

    return (
      <p className={`text-decoration-underline pointer w-100 my-0 py-2 ${className}`} onClick={handleClick} {...rest}>
        {children}
      </p>
    );
  }
);

export default Link;
