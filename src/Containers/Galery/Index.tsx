import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Galery: React.FC = () => {
  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb">
      <Container>
        <Row className="no-gutters justify-content-center mb-5 pb-2">
          <Col md={6} className="text-center heading-section p-0">
            <h2 className="m-4">Our gallery</h2>
            <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="p-0">
        <Row className="no-gutters">
          <Col md={6} lg={3} className="p-0">
            <div className="project">
              <img src="src/assets/images/work-1.jpg" className="img-fluid" alt="Colorlib Template" />
            </div>
          </Col>
          <Col md={6} lg={3} className="p-0">
            <div className="project">
              <img src="src/assets/images/work-2.jpg" className="img-fluid" alt="Colorlib Template" />
            </div>
          </Col>
          <Col md={6} lg={3} className="p-0">
            <div className="project">
              <img src="src/assets/images/work-3.jpg" className="img-fluid" alt="Colorlib Template" />
            </div>
          </Col>
          <Col md={6} lg={3} className="p-0">
            <div className="project">
              <img src="src/assets/images/work-4.jpg" className="img-fluid" alt="Colorlib Template" />
            </div>
          </Col>
          <Col md={6} lg={3} className="p-0">
            <div className="project">
              <img src="src/assets/images/work-5.jpg" className="img-fluid" alt="Colorlib Template" />
            </div>
          </Col>
          <Col md={6} lg={3} className="p-0">
            <div className="project">
              <img src="src/assets/images/work-6.jpg" className="img-fluid" alt="Colorlib Template" />
            </div>
          </Col>
          <Col md={6} lg={3} className="p-0">
            <div className="project">
              <img src="src/assets/images/work-7.jpg" className="img-fluid" alt="Colorlib Template" />
            </div>
          </Col>
          <Col md={6} lg={3} className="p-0">
            <div className="project">
              <img src="src/assets/images/work-8.jpg" className="img-fluid" alt="Colorlib Template" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Galery;
