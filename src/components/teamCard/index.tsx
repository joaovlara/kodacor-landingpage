import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import './card.module.scss'

const TeamCard: React.FC = () => {
    const [hovered, setHovered] = useState(false); 

    return (
        <Card 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)} 
            className="position-relative"
        >
            <Card.Img variant="top" src="src/assets/images/person_1.jpg" />
            <Card.Body className='text-center'>
                <Card.Title>Nome do Artista</Card.Title>
            </Card.Body>
            <Card.Footer className='text-center'>
                {hovered ? (
                    <div className="social-icons">
                        <a href="#" className="icon"><FaFacebook /></a>
                        <a href="#" className="icon"><FaTwitter /></a>
                        <a href="#" className="icon"><FaInstagram /></a>
                    </div>
                ) : (
                    <small className="text-muted">Profissão</small>
                )}
            </Card.Footer>
        </Card>
    )
}

export default TeamCard;
