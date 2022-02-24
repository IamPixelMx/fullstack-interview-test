import React, {
  useContext,
  useLayoutEffect,
  useState,
  createContext,
} from "react";
import { createBrowserHistory, Location } from "history";
import { NotFound } from "pages";
import locationToRoute from "./locationToRoute";
import { initialRoutes, RoutesType } from "./initialRoutes";

type RouterContextType = {
  route: { path: string; query?: object };
  routesList: RoutesType;
  setRoutesList: React.Dispatch<React.SetStateAction<RoutesType>>;
};

const history = createBrowserHistory();

const RouterContext = createContext<RouterContextType>({
  route: locationToRoute(history),
  routesList: initialRoutes,
  setRoutesList: () => null,
});

const useRouter = () => useContext(RouterContext);

const RouterProvider = ({ children }: { children: React.ReactNode }) => {
  const [route, setRoute] = useState(locationToRoute(history));
  const [routesList, setRoutesList] = useState<RoutesType>(initialRoutes);

  const handleRouteChange = (location: { location: Location }) => {
    const route = locationToRoute(location);
    setRoute(route);
  };

  const isValidRoute = Object.keys(routesList)
    .map((key) => routesList[key].path)
    .includes(route.path);

  useLayoutEffect(() => {
    // Subscribe to history listener
    const unlisten = history.listen(handleRouteChange);
    return () => {
      // Unsuscribe
      unlisten();
    };
  }, []);

  return (
    <RouterContext.Provider value={{ route, routesList, setRoutesList }}>
      {isValidRoute ? children : <NotFound />}
    </RouterContext.Provider>
  );
};

export { history, RouterContext, useRouter };

export default RouterProvider;
