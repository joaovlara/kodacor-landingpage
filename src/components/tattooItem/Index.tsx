import React from 'react';
import styles from './tattooItem.module.scss'; // Adicione um arquivo de estilo

interface TattooItemProps {
  image: string;
  title: string;
}

const TattooItem: React.FC<TattooItemProps> = ({ image, title }) => {
  return (
    <div className={styles.tattooItem}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default TattooItem;
