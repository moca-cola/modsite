// News.js

import React, { useState, useEffect } from 'react';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/newsEntry.json'); // Adjust the fetch URL
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNews(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Latest News</h2>
      {news.map(entry => (
        <div key={entry.id} className="news-entry">
          <img src={entry.image} alt={entry.title} />
          <h3>{entry.title}</h3>
          <p>{entry.description}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
