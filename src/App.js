import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import "react-toggle/style.css";
import Toggle from 'react-toggle';
import GoogleDocsViewer from 'react-google-docs-viewer';
import './App.css';
import ParticlesBackground from './ParticlesBackground';
import DarkParticlesTheme from './DarkParticlesTheme';
import Intro from './Intro';
import Technical from './TechnicalSkills';
import THKQ from './THKQCards';
import AirJordans from './AirJordans';
import Lululemonades from './Lululemonades';
import About from './About';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dark: false,
      color: 'white',
      fontColor: 'black',
      resume: false
    };
  }

  onDarkThemeToggle() {
    console.log('you toggled');
    this.setState ({
      dark: true,
      color: 'black',
      fontColor: 'white'
    });
  }

  onLightThemeToggle() {
    this.setState ({
      dark: false,
      color: 'white',
      fontColor: 'black'
    });
  }
  
  onThemeClick() {
    if (!this.state.dark) {
      this.onDarkThemeToggle();
    } else {
      this.onLightThemeToggle();
    }
  }

  onResumeClick() {
    console.log('you clicked');
    this.setState ({
      resume: !this.state.resume
    });
  }

  render() {
    return (
      <div>
        {
          !this.state.dark ? <ParticlesBackground /> : <DarkParticlesTheme />
        }

        <div>
          <nav class="navbar" style={{position: 'fixed', right: '0px', color: `${this.state.fontColor}`}}>
            <div style={{textAlign: 'left'}}>
            <div class="navbar-brand cursor" onClick={() => scrollToComponent(this.Top, { offset: 0, align: 'bottom', duration: 450, ease:'inExpo'})}>TOP</div>
            <div class="navbar-brand cursor" onClick={() => scrollToComponent(this.About, { offset: 10, align: 'bottom', duration: 450, ease:'inExpo'})}>ABOUT</div>
            <div class="navbar-brand cursor" onClick={() => scrollToComponent(this.Portfolio, { offset: 20, align: 'bottom', duration: 450, ease:'inExpo'})}>PORTFOLIO</div>
            <div class="navbar-brand cursor" onClick={() => scrollToComponent(this.TechnicalSkills, { offset: 30, align: 'bottom', duration: 450, ease:'inExpo'})}>TECHNICAL SKILLS</div>
            <label><i class="far fa-sun fa-1x"></i></label>
              <Toggle
                className='custom-classname'
                defaultChecked={this.state.dark}
                icons={false}
                onChange={() => this.onThemeClick()} 
                />
            <label><i class="far fa-moon fa-1x"></i></label>
            </div>
          </nav>


          <div className="container">

            <div className="landing-page">
            <div className="intro" ref={(section) => { this.Top = section; }} style={{color: `${this.state.fontColor}`}}>
              <div className="inner">
        
              <Intro color={this.state.color} about={this.About}/>
                <div className="animated bounce arrow" style={{marginTop: '150px'}}>
                <div style={{fontSize: '20pt'}}>click here</div>
                  <i className="fas fa-angle-down fa-1x cursor" 
                  onClick={() => scrollToComponent(this.About, { offset: 10, align: 'bottom', duration: 450, ease:'inExpo'})}
                  />
                </div>
              </div>
            </div>
            </div>

            <div className="about" ref={(section) => { this.About = section; }} style={{backgroundColor: `${this.state.color}`, color: `${this.state.fontColor}`}}>
              <div style={{fontSize: '30pt'}}>ABOUT
                <About />
                <div className="animated bounce" style={{marginTop: '100px'}}>
                  <div style={{fontSize: '20pt'}}>click here</div>
                    <i className="fas fa-angle-down fa-1x cursor" 
                    onClick={() => scrollToComponent(this.Portfolio, { offset: 20, align: 'bottom', duration: 450, ease:'inExpo'})}
                    />
                </div>
              </div>
            </div>

            <div className="portfolio" ref={(section) => { this.Portfolio = section; }} style={{backgroundColor: `${this.state.color}`, color: `${this.state.fontColor}`}}>
              <div style={{fontSize: '30pt', textAlign: 'center'}}>
                PORTFOLIO
                <div className="d-flex justify-content-between align-content-between flex-wrap">
                  <THKQ />
                  <AirJordans/>
                  <Lululemonades />
                </div>
                <div className="animated bounce" style={{marginTop: '100px'}}>
                  <div style={{fontSize: '20pt'}}>click here</div>
                    <i className="fas fa-angle-down fa-1x cursor" 
                    onClick={() => scrollToComponent(this.TechnicalSkills, { offset: 30, align: 'bottom', duration: 450, ease:'inExpo'})}
                    />
                </div>
              </div>
            </div>


            <div className="resume"
              ref={(section) => { this.TechnicalSkills = section; }} style={{backgroundColor: `${this.state.color}`, color: `${this.state.fontColor}`}}>
                TECHNICAL SKILLS
                <Technical />
                <div onClick={() => this.onResumeClick()} style={{fontSize: '30pt'}}>RESUME
                <span style={{marginLeft: '30px', fontSize: '10pt'}}>
                  <i className="far fa-file-alt fa-3x cursor" />
                  <div>click here for resume </div>
                </span>
                  {
                    this.state.resume && 
                    <GoogleDocsViewer
                      width="700px" 
                      height="600px" 
                      fileUrl="/file/d/1LGhlfuy4rjkHVjgndZkdDWXKwouTxhfD/edit"
                    />
                  }
            </div>
                  <div className="animated bounce" style={{textAlign: 'center'}}>
                    <div style={{fontSize: '20pt'}}>click here</div>
                      <i class="fas fa-angle-up fa-1x cursor" 
                      onClick={() => scrollToComponent(this.Top, { offset: 0, align: 'bottom', duration: 450, ease:'inExpo'})}
                      />
                  </div>  
                </div>

              <div className="animated bounce top" style={{textAlign: 'center', color: `${this.state.fontColor}` }}>
                <div style={{fontSize: '20pt'}}>top</div>
                <i class="far fa-hand-point-up fa-3x"
                  onClick={() => scrollToComponent(this.Top, { offset: 0, align: 'bottom', duration: 450, ease:'inExpo'})}
                />
              </div>       
          </div>
          <div class="navbar navbar-fixed-bottom">
              Kianna👩🏻‍💻
          </div>   
        </div>
      </div>
    );
  }
}

export default App;
