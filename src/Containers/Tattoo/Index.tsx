import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TattooItem from '../../components/tattooItem/Index';

const Tattoo: React.FC = () => {
  return (
    <section>
      <Container className='text-center'>
        <Row>
          <Col>
            <TattooItem />
          </Col>
          <Col>
            <TattooItem />
          </Col>
          <Col>
            <TattooItem />
          </Col>
          <Col>
            <TattooItem />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Tattoo;
