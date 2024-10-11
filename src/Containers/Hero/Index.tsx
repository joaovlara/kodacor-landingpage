import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import BackgroundImage1 from '../../assets/img/bakckground_1.png';
import BackgroundImage2 from '../../assets/img/bg-2.jpg';
import './hero.module.scss'

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(BackgroundImage1);
  const images = [BackgroundImage1, BackgroundImage2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      className="hero-section d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${currentImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        transition: 'background-image 1s ease-in-out',
      }}
    >
      <Container className="text-center text-white">
        <Row>
          <Col>
            <p className="lead">Boas Vindas ao Estudio</p>
            <h1 className="display-4 fw-bold">
              ESTUDIO DE TATUAGEM <br />
              E BODY PIERCING
            </h1>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
              <Button variant="outline-light" size="lg" className="px-4">Ver Galeria</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
