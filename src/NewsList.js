import React from 'react';
import NewsEntry from './NewsEntry';

const NewsList = ({ news }) => {
  return (
    <div className="news-list">
      {news.map(entry => (
        <NewsEntry key={entry.id} title={entry.title} image={entry.image} description={entry.description} />
      ))}
    </div>
  );
};

export default NewsList;
