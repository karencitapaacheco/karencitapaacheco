import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Inicio</h1>
      <div>
        <Link to="/series">Ver Series</Link>
      </div>
      <div>
        <Link to="/movies">Ver Películas</Link>
      </div>
    </div>
  );
};

export default Home;
