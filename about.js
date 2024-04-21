import React from 'react';
import './about.css';
import gymlady from './gymlady.png';

function About() {
  return (
    <div className="about-container">
      <div className="about-main">
        <img src={gymlady} alt="Fitness Lady" className="about-image"/>
        <div className="about-text">
          <h1>WHY USE RACE-SPECIFIC ATTRIBUTES?</h1>
          <p>All races are not created equal. From terrain, to season, to road surface, each of these variables can make a huge difference on race day...</p>
        </div>
      </div>
      <div className="about-nav">
        <div className="nav-item">
          <div className="nav-title">WHAT WE DO</div>
          <div className="nav-content">Description of what we do.</div>
        </div>
        <div className="nav-item">
          <div className="nav-title">WHY SHOULD USE CTP?</div>
          <div className="nav-content">Reasons to use CTP.</div>
        </div>
        <div className="nav-item">
          <div className="nav-title">WHY WE'RE DIFFERENT</div>
          <div className="nav-content">What makes us different.</div>
        </div>
        <div className="nav-item">
          <div className="nav-title">WHY USER SPECIFIC PLANS?</div>
          <div className="nav-content">Benefits of race-specific plans.</div>
        </div>
        <div className="nav-item">
          <div className="nav-title">WHO'S BEHIND CTP?</div>
          <div className="nav-content">The team behind CTP.</div>
        </div>
        <div className="nav-item">
          <div className="nav-title">CTP VS PERSONAL TRAINING</div>
          <div className="nav-content">Comparing CTP with personal training.</div>
        </div>
      </div>
    </div>
  );
}

export default About;
