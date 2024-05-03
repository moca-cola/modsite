// src/NewsEntry.js

import React from 'react';

const NewsEntry = ({ entry }) => {
  return (
    <div className="news-entry">
      <img src={entry.image} alt={entry.title} />
      <h2>{entry.title}</h2>
      <p>{entry.description}</p>
    </div>
  );
};

export default NewsEntry;
