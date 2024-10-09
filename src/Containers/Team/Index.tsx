import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamCard from '../../components/teamCard';

const Team: React.FC = () => {
  return (
    <Container>
      <div className="d-flex overflow-auto">
        <Row className="flex-nowrap">
          <Col xs={6} sm={6} md={3} lg={3}>
            <TeamCard />
          </Col>
          <Col xs={6} sm={6} md={3} lg={3}>
            <TeamCard />
          </Col>
          <Col xs={6} sm={6} md={3} lg={3}>
            <TeamCard />
          </Col>
          <Col xs={6} sm={6} md={3} lg={3}>
            <TeamCard />
          </Col>
          <Col xs={6} sm={6} md={3} lg={3}>
            <TeamCard />
          </Col>
          <Col xs={6} sm={6} md={3} lg={3}>
            <TeamCard />
          </Col>
          <Col xs={6} sm={6} md={3} lg={3}>
            <TeamCard />
          </Col>
          <Col xs={6} sm={6} md={3} lg={3}>
            <TeamCard />
          </Col>
          <Col xs={6} sm={6} md={3} lg={3}>
            <TeamCard />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Team;
