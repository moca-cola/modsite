import React from 'react';
import NewsEntry from './NewsEntry'; // Import the NewsEntry component

const Home = () => {
  return (
    <div className="content">
      <h2 className="decorated">Home</h2>
      <p className="centered">Welcome to my website!</p>
      <p className="centered">I'm Moca, a <i>very</i> inconsistent modder for HP2. I hope to get some actual projects out soon, both individual levels as well as larger mods. <br></br>This website will host updates and links for any of my projects, so if you want to see what I'm working on check out the News section!</p>
      <div className="centered">
        <NewsEntry /> {/* Render the NewsEntry component */}
      </div>
    </div>
  );
};

export default Home;
