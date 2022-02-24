export type RoutesType = { [route: string]: { path: string; query?: object } };

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
  pull: {
    path: "/pull",
  },
};
