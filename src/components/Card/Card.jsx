import React from 'react';
import './Card.css';

const Card = ({ title, description, image, link }) => {
  return (
    <div className="card">
      <img 
        className="img-loading"
        src={image} 
        alt={title}
        onLoad={(e) => e.target.classList.add('img-loaded')}
      />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        {link && <a href={link} className="btn-primary">Learn More</a>}
      </div>
    </div>
  );
};

export default Card;
