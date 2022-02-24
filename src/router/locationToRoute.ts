import type { Location } from "history";
import qs from "querystringify";

type Props = {
  location: Location;
};

const locationToRoute = ({ location }: Props) => {
  return {
    path: location.pathname,
    query: qs.parse(location.search),
  };
};

export default locationToRoute;
