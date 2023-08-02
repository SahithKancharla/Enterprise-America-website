import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./css/Navbar.css";

function Navbartemp() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <h2 className="company-text">ENTERPRISE AMERICA</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="space-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <h3 className="nav-options">Home</h3>
              </Nav.Link>
              <NavDropdown title="Our Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <h3 className="nav-options-dropdown">Commercial Finance</h3>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <h3 className="nav-options-dropdown">Commercial Real Estate</h3>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <h3 className="nav-options-dropdown">Commercial Insurance</h3>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <h3 className="nav-options-dropdown">Commercial Development</h3>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <h3 className="nav-options-dropdown">Commercial Trading</h3>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <h3 className="nav-options-dropdown">Live Rates</h3>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">
                <h3 className="nav-options">Closing Loans</h3>
              </Nav.Link>
              <Nav.Link href="#link">
                <h3 className="nav-options">About Us</h3>
              </Nav.Link>
              <Nav.Link href="#link">
                <h3 className="nav-options">Contact</h3>
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbartemp;
