import React from "react";
import { useStore } from "store";
import { initialRoutes } from "router";
import { Alert, Loader, Link } from "components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const {
    state: { loading, alertText, alertStatus },
  } = useStore();

  return (
    <React.Fragment>
      <nav>
        <Link to={initialRoutes.home.path}>
          <img src="/logo.png" alt="logo" className="pointer" />
        </Link>
      </nav>

      <div className="container">
        <Alert alertText={alertText} alertStatus={alertStatus} />
        {children}
      </div>
      <Loader show={loading} />
    </React.Fragment>
  );
};

export default Layout;

Layout.displayName = "Layout";
