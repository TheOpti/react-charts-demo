import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';


function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <LinkContainer to="/main">
        <Navbar.Brand>React chart demo</Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        <LinkContainer to="/dygraphs">
          <Nav.Link>Dygraphs</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  )
}

export default Header;