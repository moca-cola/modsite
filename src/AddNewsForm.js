import React, { useState } from 'react';

const AddNewsForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, image, description });
    // Reset form fields after submission
    setTitle('');
    setImage('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Image URL:
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default AddNewsForm;
