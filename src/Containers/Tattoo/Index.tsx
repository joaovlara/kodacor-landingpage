import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TattooItem from '../../components/tattooItem/Index';

import StyleImage1 from '../../assets/svg/brush-mark-svgrepo-com.svg';
import StyleImage2 from '../../assets/svg/brush-mark-svgrepo-com.svg';
import StyleImage3 from '../../assets/svg/brush-mark-svgrepo-com.svg';
import StyleImage4 from '../../assets/svg/brush-mark-svgrepo-com.svg';
import StyleImage5 from '../../assets/svg/brush-mark-svgrepo-com.svg';
import StyleImage6 from '../../assets/svg/brush-mark-svgrepo-com.svg';
import StyleImage7 from '../../assets/svg/brush-mark-svgrepo-com.svg';
import StyleImage8 from '../../assets/svg/brush-mark-svgrepo-com.svg';

const Tattoo: React.FC = () => {
  const styles = [
    { image: StyleImage1, title: 'Estilo 1' },
    { image: StyleImage2, title: 'Estilo 2' },
    { image: StyleImage3, title: 'Estilo 3' },
    { image: StyleImage4, title: 'Estilo 4' },
    { image: StyleImage5, title: 'Estilo 5' },
    { image: StyleImage6, title: 'Estilo 6' },
    { image: StyleImage7, title: 'Estilo 7' },
    { image: StyleImage8, title: 'Estilo 8' },
  ];

  return (
    <section>
      <Container className='my-5'>
        <Row className="justify-content-center flex-wrap">
          {styles.map((style, index) => (
            <Col xs={6} md={3} key={index} className="d-flex justify-content-center mb-4">
              <TattooItem
                image={style.image}
                title={style.title} 
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Tattoo;
