import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" data-bs-theme="dark" className={scrolled ? "bg-dark"  : "bg-body-transparent"} fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="text-white">KODACOR STUDIO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav text-white" />
        <Navbar.Collapse id="basic-navbar-nav text-white">
          <Nav className="me-auto text-end">
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
