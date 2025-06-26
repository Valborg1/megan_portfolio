import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

function MeganNavbar() {
  return (
    <Navbar expand="md" className="custom-navbar py-3" sticky="top">
      <Container>
      <Navbar.Brand as={Link} to="/" className="fw-bold meg-brand">
        Meg Mcmanama
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/publications">Publications</Nav.Link>
            <Nav.Link as={Link} to="/awards">Awards</Nav.Link>
            <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MeganNavbar;
