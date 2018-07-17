import React, { Component } from 'react';
import './App.css';

class Intro extends Component {
  render() {
    return (
      <div style={{backgroundColor: `${this.props.color}`}}>
        <div style={{fontSize: '50pt'}}>Hi! My name <span id="kianna"><span>Kianna Quach</span></span>.</div>

        <div style={{fontSize: '25pt'}}>
          Full Stack Engineer | Front-End Engineer 
        </div>

        {/* <span style={{fontSize: '20pt'}}>
        I am a Full Stack / Front-End software engineer who loves to build elegant, beautiful interfaces.
        </span> */}
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/kiannaquach" className="icons"><i className="fab fa-github intro-websites" style={{margin: '10px', fontSize: '38pt'}}></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/kiannaquach" className="icons"><i className="fab fa-linkedin intro-websites" style={{marginRight: '20px', fontSize: '38pt'}}></i></a>
          <a target="_blank" rel="noopener noreferrer" href="mailto:kiannaquach.kq@gmail.com" className="icons"><i className="far fa-envelope intro-websites" style={{fontSize: '38pt'}}></i></a>
        </div>
      </div>
    );
  }
}

export default Intro;
