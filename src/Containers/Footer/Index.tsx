import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <Container fluid className="bg-dark text-light py-4">
      <footer>
        <Row>
          <Col className="text-center">
            <div className="social-icons">
              <FaFacebook className="me-1" />
              <FaTwitter className="me-1" />
              <FaInstagram className="me-1" />
              <FaLinkedin className="me-1" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-light">Home</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-light">Features</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-light">Pricing</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-light">FAQs</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-light">About</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="text-light">&copy; 2024 Company, Inc</p>
          </Col>
        </Row>
      </footer>
    </Container>
  );
}

export default Footer;
