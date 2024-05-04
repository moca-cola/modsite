import React, { useState, useEffect } from 'react';

const NewsEntry = ({ setCurrentPage }) => {
  const [latestEntry, setLatestEntry] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestEntry = async () => {
      try {
        // Fetch the news data
        const res = await fetch('newsEntry.json'); // Adjust the fetch URL
        if (!res.ok) {
          throw new Error('Failed to fetch news data');
        }
        const data = await res.json();

        // Find the latest news entry based on the highest 'id' value
        const latest = data.reduce((latest, current) => {
          return current.id > latest.id ? current : latest;
        });

        setLatestEntry(latest);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestEntry();
  }, []);

  const handleNewsClick = () => {
    // Set the current page to 'News' when clicked
    setCurrentPage('News');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="news-entry-container" onClick={handleNewsClick}>
        <div className="news-entry">
          <img src={latestEntry.image} alt={latestEntry.title} />
          <div className="news-content">
            <h2>{latestEntry.title}</h2>
            <p>{latestEntry.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsEntry;
