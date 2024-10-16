import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamCard from '../../components/teamCard';

// Importação das imagens
import Person1 from "../../assets/images/person_1.jpg";
import Person2 from "../../assets/images/person_2.jpg";
import Person3 from "../../assets/images/person_3.jpg";
import Person4 from "../../assets/images/person_4.jpg";
import Person5 from "../../assets/images/person_1.jpg";

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Full Name 1",
      designation: "Designation 1",
      image: Person1,
      facebookUrl: "#",
      twitterUrl: "#",
      instagramUrl: "#",
    },
    {
      name: "Full Name 2",
      designation: "Designation 2",
      image: Person2,
      facebookUrl: "#",
      twitterUrl: "#",
      instagramUrl: "#",
    },
    {
      name: "Full Name 3",
      designation: "Designation 3",
      image: Person3,
      facebookUrl: "#",
      twitterUrl: "#",
      instagramUrl: "#",
    },
    {
      name: "Full Name 4",
      designation: "Designation 4",
      image: Person4,
      facebookUrl: "#",
      twitterUrl: "#",
      instagramUrl: "#",
    },
    {
      name: "Full Name 1",
      designation: "Designation 5",
      image: Person5,
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
