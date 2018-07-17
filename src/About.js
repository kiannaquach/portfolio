import React, { Component } from 'react';
import './App.css';

class About extends Component {
  render() {
    return (
      <div>
          <div>
            <img src="kianna2.jpg" className="rounded-circle" width="240" height="240" alt="profile" /> 
          </div>
          <p style={{fontSize: '20pt'}}> 
          I am a Fullstack Engineer looking for new opportunities. 
          I am skilled in Javascript, Postgres, Mongo, React, Node.js/Express and much more. 
          I enjoy building Fullstack applications and curating elegant, beautiful interfaces. 
          In my spare time, I love going on long walks and serving my community. 
          I am also a strong advocate for education and continued learning. 
          One of my favorite activities is to build and create anything from scratch. 
          Some of my core values include creativity, open-mindedness, diversity, and drive to learn. 
          </p>
      </div>
    );
  }
}

export default About;
