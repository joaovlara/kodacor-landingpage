import React from 'react';
import Card from 'react-bootstrap/Card';

const TeamCard: React.FC = () => {
    return (
        <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
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
