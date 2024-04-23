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
          <div className="nav-content">We develop personalized fitness and nutrition solutions, using cutting-edge technology to create customized workout and meal plans tailored to your equipment, fitness goals, and dietary preferences..</div>
        </div>
        <div className="nav-item">
          <div className="nav-title">WHY SHOULD I USE THIS</div>
          <div className="nav-content">Choose our platform for a truly personalized approach to fitness and nutrition. Our system uses advanced algorithms to tailor workouts and dietary recommendations specifically to your needs and available resources. This ensures that every exercise session and meal plan moves you closer to your health goals efficiently and effectively. With our integrated feedback mechanism, your fitness journey adapts and evolves based on your progress and preferences, keeping you motivated and on track.</div>
        </div>
        <div className="nav-item">
          <div className="nav-title">WHY WE'RE DIFFERENT</div>
          <div className="nav-content">Stand out with our service because it's completely free! We offer unparalleled access to a vast database of workouts and nutrition recipes, all available at just a few clicks. Our platform stands out by making personalized fitness and nutrition accessible to everyone, regardless of budget, giving you the tools you need to succeed in your health and fitness journey right at your fingertips.</div>
        </div>
        <div className="nav-item">
          <div className="nav-title">WHY USER SPECIFIC PLANS?</div>
          <div className="nav-content">User-specific plans are essential because everyone's fitness journey is unique. Our personalized plans are designed to match your specific fitness levels, available equipment, dietary needs, and goals. This tailored approach ensures that you receive the most effective and relevant guidance, maximizing your results and enhancing your overall health and wellness experience.</div>
        </div>
        <div className="nav-item">
          <div className="nav-title">WHO'S BEHIND THIS?</div>
          <div className="nav-content">Developed by Akshay, Ishwar, Malav, and Yaksh—a group passionate about making fitness and nutrition accessible for everyone.</div>
        </div>
        <div className="nav-item">
          <div className="nav-title">US VS PERSONAL TRAINING</div>
          <div className="nav-content">Compared to traditional personal training, our platform offers unparalleled accessibility and convenience—at no cost. With detailed step-by-step guides and video demonstrations for each exercise, we provide all the tools you need to succeed without the necessity for in-person training. Whether you're at home or on the go, our comprehensive database of workouts and nutrition plans is always just a click away, giving you the freedom to train whenever and wherever you choose.</div>
        </div>
      </div>
    </div>
  );
}

export default About;
