import React, { useState, useEffect } from 'react';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    try {
      const res = await fetch('newsEntry.json', {
        headers: {
          Accept: 'application/json'
        }
      });
  
      if (!res.ok) {
        throw new Error('Failed to fetch news');
      }
  
      const data = await res.json();
      // Sort the news entries based on the 'id' property
      data.sort((a, b) => b.id - a.id);
      setNews(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="content">
      <h2 className="decorated">Latest News</h2>
      {news.map(entry => (
        <div key={entry.id} className="news-list">
          <img src={entry.image} alt={entry.title} />
          <h3>{entry.title}</h3>
          <p>{entry.description}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
