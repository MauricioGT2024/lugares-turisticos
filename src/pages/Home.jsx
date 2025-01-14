import React from 'react';
import Card from '../components/Card/Card';
import HomeDetails from "../components/Inicio/HomeDetails";

const Home = () => {
  return (
    <>
      <HomeDetails/>
      <div className="card-grid">
        <Card title="Card 1" description="Description 1" image="/path/to/image1.jpg" />
        <Card title="Card 2" description="Description 2" image="/path/to/image2.jpg" />
        <Card title="Card 3" description="Description 3" image="/path/to/image3.jpg" />
        {/* ...otros cards... */}
      </div>
    </>
  );
};

export default Home;
