// App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';
import News from './News'; // Changed to News from NewsPage
import HP2 from './HP2';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    // Fetch latest news data when the component mounts
    fetchLatestNewsData();
  }, []);

  const fetchLatestNewsData = async () => {
    try {
      // Example fetch request to fetch latest news data
      const response = await fetch('/api/newsEntry.json');
      const data = await response.json();
      setLatestNews(data);
    } catch (error) {
      console.error('Error fetching latest news:', error);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home latestNews={latestNews} />;
      case 'News':
        return <News />;
      case 'HP2':
        return <HP2 />;
      default:
        return <Home latestNews={latestNews} />;
    }
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <button className="black" onClick={() => setCurrentPage('Home')}>Home</button>
          </li>
          <li>
            <button className="black" onClick={() => setCurrentPage('News')}>News</button> {/* Changed to 'News' */}
          </li>
          <li>
            <button className="black" onClick={() => setCurrentPage('HP2')}>HP2</button>
          </li>
        </ul>
      </nav>

      {renderPage()}
    </div>
  );
}

export default App;
