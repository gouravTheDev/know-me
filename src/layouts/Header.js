import React from "react";
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand><Link to="/">Know-Me</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/questions/username" className="mx-2" style={{"color":"black"}}>Questions</Link>
            <Link className="mx-2" to="/scores/username" style={{"color":"black"}}>Scores</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
