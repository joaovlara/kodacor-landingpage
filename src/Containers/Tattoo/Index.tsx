import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TattooItem from '..//..//components/tattooItem/Index'

const Tattoo: React.FC = () => {
  const styles = [
    { image: 'src/assets/svg/brush-mark-svgrepo-com.svg', title: 'Estilo 1' },
    { image: 'src/assets/svg/brush-mark-svgrepo-com.svg', title: 'Estilo 2' },
    { image: 'src/assets/svg/brush-mark-svgrepo-com.svg', title: 'Estilo 3' },
    { image: 'src/assets/svg/brush-mark-svgrepo-com.svg', title: 'Estilo 4' },
    { image: 'src/assets/svg/brush-mark-svgrepo-com.svg', title: 'Estilo 5' },
    { image: 'src/assets/svg/brush-mark-svgrepo-com.svg', title: 'Estilo 6' },
    { image: 'src/assets/svg/brush-mark-svgrepo-com.svg', title: 'Estilo 7' },
    { image: 'src/assets/svg/brush-mark-svgrepo-com.svg', title: 'Estilo 8' },
  ];

  return (
    <section>
      <Container className='my-5'>
        <Row className="justify-content-center flex-wrap">
          {styles.map((style, index) => (
            <Col xs={6} md={3} key={index} 
            className="d-flex justify-content-center mb-4">
              <TattooItem
                image={style.image}
                title={style.title} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Tattoo;
