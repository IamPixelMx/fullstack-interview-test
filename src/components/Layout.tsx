import React from "react";
import { useStore } from "store";
import { Container } from "react-bootstrap";
import { Alert, Loader, Nav } from "components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const {
    state: { loading, alertText, alertStatus },
  } = useStore();

  return (
    <React.Fragment>
      <Nav />
      <Container>
        <Alert alertText={alertText} alertStatus={alertStatus} />
        {children}
      </Container>
      <Loader show={loading} />
    </React.Fragment>
  );
};

export default Layout;

Layout.displayName = "Layout";
