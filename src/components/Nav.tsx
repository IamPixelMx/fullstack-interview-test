import { initialRoutes } from "router";
import { Nav as BootstrapNav, Navbar, Container } from "react-bootstrap";
import { Link } from "components";

const Nav = () => {
  return (
    <Navbar bg="light" variant="light" className="mb-5">
      <Container>
        <Navbar.Brand>
          <Link to={initialRoutes.home.path}>
            <img
              alt="logo"
              src="/logo.png"
              height="80"
              className="d-inline-block align-top"
            />
          </Link>
        </Navbar.Brand>
        <BootstrapNav className="me-auto">
          <BootstrapNav.Link>
            <Link to={initialRoutes.branches.path} textDecoration="none">
              Branches
            </Link>
          </BootstrapNav.Link>
          <BootstrapNav.Link>
            <Link to={initialRoutes.pulls.path} textDecoration="none">
              Pull requests
            </Link>
          </BootstrapNav.Link>
        </BootstrapNav>
      </Container>
    </Navbar>
  );
};

export default Nav;
