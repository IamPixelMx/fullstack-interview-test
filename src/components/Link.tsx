import React from "react";
import { useRouter, history } from "router";
import { useActions } from "store";

type Props = {
  to: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
  className?: string;
  textDecoration?: string;
};

const Link = React.memo(
  ({
    to,
    children,
    onClick,
    className = "",
    textDecoration = "underline",
    ...rest
  }: Props) => {
    const { route } = useRouter();
    const { clearAlert } = useActions();

    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      if (route.path === to) return;

      if (onClick) onClick(e);
      history.push(to);
      clearAlert()
    };

    return (
      <p
        className={`text-decoration-${textDecoration} pointer w-100 my-0 py-2 ${className}`}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </p>
    );
  }
);

export default Link;
