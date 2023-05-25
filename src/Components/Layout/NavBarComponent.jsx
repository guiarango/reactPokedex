import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";

function NavBarComponent() {
  return (
    <Navbar bg="secondary" variant="dark" expand="lg" sticky="top">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src="/logo-pokeapi.png"
              style={{ width: 120 }}
              alt="logo-principal"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "150px" }}
            navbarScroll
          >
            <LinkContainer to="/pokedex">
              <Nav.Link>Pokedex</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/types">
              <Nav.Link>Tipos de pokémon</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
