import React from "react";
import { Button } from "react-bootstrap";
import { initialRoutes } from "router";
import { Link } from "components";

const NotFound = () => (
  <div>
    <h1>Not found</h1>
    <h2 className="mt-3">The route that you're tried to go doesn't exist</h2>
    <br />
    <br />
    <Button>
      <Link className="btn-link text-uppercase" to={initialRoutes.home.path}>
        back to home
      </Link>
    </Button>
  </div>
);

export default NotFound;

NotFound.displayName = "NotFoundPage";
