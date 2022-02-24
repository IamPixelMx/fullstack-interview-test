import React, { useContext } from "react";
import { RouterContext } from "./RouterProvider";

type Props = {
  children: React.ReactNode;
  path?: string;
};

const Route = ({ path, children }: Props) => {
  const { route, routesList } = useContext(RouterContext);

  // console.log("PATHS:", route.path, path, route.path !== path);
  // console.log("ROUTES:", routesList);

  // Return null if the supplied path doesn't match the current route path
  return route.path !== path ? null : (
    <React.Fragment>{children}</React.Fragment>
  );
};

export default Route;

Route.displayName = "RouteComponent";
