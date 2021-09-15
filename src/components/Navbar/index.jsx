import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { GitHub, GitBranch, Star } from "react-feather";

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Markdown Previewer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar" />
        <Navbar.Collapse id="responsive-navbar">
          <Nav className="ms-auto">
            <Nav.Link className="d-flex align-items-center">
              <Star size={17} className="me-1" />
              Star this project
            </Nav.Link>
            <Nav.Link className="d-flex align-items-center">
              <GitBranch size={17} className="me-1" />
              Fork to your GitHub
            </Nav.Link>
            <Nav.Link className="d-flex align-items-center">
              <GitHub size={17} className="me-1" />
              Follow @Guilherme-Arruda
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
