import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('feed/sample.json');
        const filteredMovies = response.data.entries.filter(entry => entry.programType === 'movie' && entry.releaseYear >= 2010);
        const sortedMovies = filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
        setMovies(sortedMovies.slice(0, 20));
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Películas</h1>
      {movies.map(movie => (
        <Link key={movie.title} to={`/movies/${movie.title}`}>
          <div>
            <img src={movie.images['Poster Art'].url} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Movies;
