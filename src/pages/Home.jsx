import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Agregaremos estilos en este archivo

const places = [
  { id: 1, name: 'París', image: '/images/paris.jpg' },
  { id: 2, name: 'Londres', image: '/images/londres.jpg' },
  { id: 3, name: 'Nueva York', image: '/images/nueva-york.jpg' },
];

const Home = () => {
  return (
    <div className="home-container">
      <h1>Lugares Turísticos</h1>
      <div className="cards-container">
        {places.map(place => (
          <Link to={`/place/${place.id}`} key={place.id} className="card">
            <img src={place.image} alt={place.name} className="card-image" />
            <div className="card-body">
              <h2 className="card-title">{place.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
