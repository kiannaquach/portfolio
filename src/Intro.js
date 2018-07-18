import React, { Component } from 'react';
import './App.css';

class Intro extends Component {
  render() {
    return (
      <div style={{backgroundColor: `${this.props.color}`}}>
        <div style={{fontSize: '50pt'}}>Hi! My name is <span id="kianna" style={{fontWeight: 400}}><span>Kianna Quach</span></span>.</div>

        <div style={{fontSize: '25pt'}}>
          Full Stack Engineer | Front-End Engineer 
        </div>

        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/kiannaquach" className="icons"><i className="fab fa-github intro-bounce-icons" style={{margin: '10px', fontSize: '38pt'}}></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/kiannaquach" className="icons"><i className="fab fa-linkedin intro-bounce-icons" style={{marginRight: '20px', fontSize: '38pt'}}></i></a>
          <a target="_blank" rel="noopener noreferrer" href="mailto:kiannaquach.kq@gmail.com" className="icons"><i className="far fa-envelope intro-bounce-icons" style={{fontSize: '38pt'}}></i></a>
        </div>
      </div>
    );
  }
}

export default Intro;
