import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamCard from '../../components/teamCard';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Full Name 1",
      designation: "Designation 1",
      image: "src/assets/images/person_1.jpg",
      facebookUrl: "#",
      twitterUrl: "#",
      instagramUrl: "#",
    },
    {
      name: "Full Name 2",
      designation: "Designation 2",
      image: "src/assets/images/person_2.jpg",
      facebookUrl: "#",
      twitterUrl: "#",
      instagramUrl: "#",
    },
    {
      name: "Full Name 3",
      designation: "Designation 3",
      image: "src/assets/images/person_3.jpg",
      facebookUrl: "#",
      twitterUrl: "#",
      instagramUrl: "#",
    },
    {
      name: "Full Name 4",
      designation: "Designation 4",
      image: "src/assets/images/person_4.jpg",
      facebookUrl: "#",
      twitterUrl: "#",
      instagramUrl: "#",
    },
    {
      name: "Full Name 5",
      designation: "Designation 5",
      image: "src/assets/images/person_1.jpg",
      facebookUrl: "#",
      twitterUrl: "#",
      instagramUrl: "#",
    },
  ];

  return (
    <Container>
      <div className="d-flex overflow-auto">
        <Row className="flex-nowrap my-5">
          {teamMembers.map((member, index) => (
            <Col key={index} xs={12} sm={6} md={3} lg={3}>
              <TeamCard
                name={member.name}
                designation={member.designation}
                image={member.image}
                facebookUrl={member.facebookUrl}
                twitterUrl={member.twitterUrl}
                instagramUrl={member.instagramUrl}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

export default Team;
