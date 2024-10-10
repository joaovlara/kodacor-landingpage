import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar: React.FC = () => {
  return (
    <Navbar expand="lg" className="bg-body-transparent" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="text-white">KODACOR STUDIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-white">Sobre</Nav.Link>
            <Nav.Link href="#link" className="text-white">Serviços</Nav.Link>
            <Nav.Link href="#link" className="text-white">Time</Nav.Link>
            <Nav.Link href="#link" className="text-white">Galeria</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
