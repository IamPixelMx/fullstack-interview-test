export type RoutesType = { [route: string]: { path: string } };

export const initialRoutes: RoutesType = {
  home: {
    path: "/",
  },
  branches: {
    path: "/branches",
  },
  branch: {
    path: "/branch",
  },
  commit: {
    path: "/commit",
  },
  pulls: {
    path: "/pulls",
  },
  compare: {
    path: "/compare",
  },
};
