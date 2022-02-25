import type { Location } from "history";

type Props = {
  location: Location;
};

const locationToRoute = ({ location }: Props) => {
  return {
    path: location.pathname,
  };
};

export default locationToRoute;
