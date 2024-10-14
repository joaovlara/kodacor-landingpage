import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './card.module.scss';

import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

interface TeamCardProps {
    name: string;
    designation: string;
    image: string;
    facebookUrl: string;
    twitterUrl: string;
    instagramUrl: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, designation, image, facebookUrl, twitterUrl, instagramUrl }) => {
    return (
        <Card className={`${styles.card} text-center border rounded wow fadeInUp`} data-wow-delay="0.1s">
            <div className={styles['team-item']}>
                <Card.Img variant="top" src={image} alt={`${name}`} className="img-fluid" />

                <div className={styles['team-text']}>
                    <div className={styles['team-title']}>
                        <h5>{name}</h5>
                        <span>{designation}</span>
                    </div>
                    <div className={styles['team-social']}>
                        <a className={`${styles.btn} btn btn-square btn-light rounded-circle`} 
                        href={facebookUrl}>
                            <FaFacebook />
                        </a>
                        <a className={`${styles.btn} btn btn-square btn-light rounded-circle`} 
                        href={twitterUrl}>
                            <FaTwitter />
                        </a>
                        <a className={`${styles.btn} btn btn-square btn-light rounded-circle`} 
                        href={instagramUrl}>
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default TeamCard;
