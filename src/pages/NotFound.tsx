import React from "react";
import { Link } from "components";
import { initialRoutes } from "router";

const NotFound = () => (
  <div>
    <h1>Not Found</h1>
    <p>Sorry, this page doesn't exist</p>
    <br />
    <br />
    <Link className="btn-link text-uppercase" to={initialRoutes.home.path}>
      back to home
    </Link>
  </div>
);

export default NotFound;

NotFound.displayName = "NotFoundPage";
