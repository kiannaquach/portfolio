import React, { Component } from 'react';
import './App.css';

class TechnicalSkills extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm skills">
          <div style={{fontSize: '20pt', fontWeight: '400'}}>Front-End:​</div>
          <div>Javascript/ES6</div>
          <div>React/Redux</div>
          <div>AngularJS</div>
          <div>BackboneJS</div>
          <div>Styled Components</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>SASS</div>
          <div>Bootstrap</div>
          <div>Material-UI</div>
          <div>jQuery</div>
        </div>
        <div className="col-sm skills">
          <div style={{fontSize: '20pt', fontWeight: '400'}}>Back-End:</div>
          <div>Node.js</div>
          <div>Express</div>
          <div>MySQL</div>
          <div>MongoDB</div>
          <div>Cassandra</div>
          <div>PostgreSQL</div>
          <div>AWS (EC2)</div>
          <div>NGINX</div>
        </div>
        <div className="col-sm skills">
          <div style={{fontSize: '20pt', fontWeight: '400'}}>Other: </div>
          <div>Git</div>
          <div>Mocha/Chai</div>
          <div>Jest/Enzyme</div>
          <div>Docker</div>
          <div>Webpack</div>
          <div>New Relic</div>
        </div>
      </div>
    );
  }
}

export default TechnicalSkills;
