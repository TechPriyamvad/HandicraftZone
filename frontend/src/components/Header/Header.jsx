import React from "react";
import { Navbar, Nav, Container, NavItem } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">HandicraftZone</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="ml-auto">
              <NavItem>
                <Nav.Link href="/cart">
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link href="/login">
                  <i className="fas fa-user"></i> Sign In
                </Nav.Link>
              </NavItem>
            </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
