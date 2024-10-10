import React from 'react';
import Card from 'react-bootstrap/Card';

const TeamCard: React.FC = () => {
    return (
        <Card>
            <Card.Img variant="top" src="src/assets/images/person_1.jpg" />
            <Card.Body className='text-center'>
                <Card.Title>Card title</Card.Title>
            </Card.Body>
            <Card.Footer className='text-center'>
                <small className="text-muted">hover com icons</small>
            </Card.Footer>
        </Card>
    )
}

export default TeamCard
