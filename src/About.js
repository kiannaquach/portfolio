import React, { Component } from 'react';
import './App.css';

class About extends Component {
  render() {
    return (
      <div style={{backgroundColor: `${this.props.color}`}}>
          <div>
            <img src="https://s3-us-west-1.amazonaws.com/kianna-portfolio/kianna2.jpg" className="rounded-circle" width="200" height="200" alt="profile" /> 
          </div>
          <div style={{fontSize: '14pt', textAlign: 'left'}}>
            <div>
            I am a <span style={{color: 'rgb(48, 110, 227)', fontWeight: 400}}>Fullstack Engineer</span> looking for new opportunities. 
            I am skilled in <span style={{color: 'rgb(48, 110, 227)', fontWeight: 400}}>Javascript</span>, Postgres, Mongo, <span style={{color: 'rgb(48, 110, 227)', fontWeight: 400}}>React</span>, Node.js/Express and much more. 
            I enjoy building <span style={{color: 'rgb(48, 110, 227)', fontWeight: 400}}>Fullstack applications</span> and curating <span style={{color: 'rgb(48, 110, 227)', fontWeight: 400}}>elegant, beautiful</span> interfaces. 
            </div>
            <br />
            <div>
            In my spare time, I love going on <span style={{color: 'rgb(48, 110, 227)', fontWeight: 400}}>long walks</span> and <span style={{color: 'rgb(48, 110, 227)', fontWeight: 400}}>serving my community</span>. 
            I not only have a passion for programming - I also love <span style={{color: 'rgb(48, 110, 227)', fontWeight: 400}}>science</span> and <span style={{color: 'rgb(48, 110, 227)', fontWeight: 400}}>technology</span>.
            I am a strong advocate for <span style={{color: 'rgb(48, 110, 227)', fontWeight: 400}}>education</span> and <span style={{color: 'rgb(48, 110, 227)', fontWeight: 400}}>continued learning</span>. 
            One of my favorite activities is to <span style={{color: 'rgb(48, 110, 227)', fontWeight: 400}}>build</span> and <span style={{color: 'rgb(48, 110, 227)', fontWeight: 400}}>create</span> anything from scratch. 
            Some of my core <span style={{color: 'rgb(48, 110, 227)', fontWeight: 400}}>values</span> include creativity, <span style={{color: 'rgb(48, 110, 227)', fontWeight: 400}}>open-mindedness</span>, diversity, and <span style={{color: 'rgb(48, 110, 227)', fontWeight: 400}}>drive to learn</span>. 
            </div>
          </div>
      </div>
    );
  }
}

export default About;
