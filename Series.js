import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Series = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('feed/sample.json');
        const filteredSeries = response.data.entries.filter(entry => entry.programType === 'series' && entry.releaseYear >= 2010);
        const sortedSeries = filteredSeries.sort((a, b) => a.title.localeCompare(b.title));
        setSeries(sortedSeries.slice(0, 20));
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
      <h1>Series</h1>
      {series.map(series => (
        <Link key={series.title} to={`/series/${series.title}`}>
          <div>
            <img src={series.images['Poster Art'].url} alt={series.title} />
            <p>{series.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Series;
