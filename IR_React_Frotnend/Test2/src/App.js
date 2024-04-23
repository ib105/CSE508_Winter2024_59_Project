import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import gymlady from './gymlady.png';
import About from './about'; // Ensure this is the correct path to your About component
import Programs from './programs'; // Ensure this is the correct path to your Programs component
import MuscleSelector from './muscleselector'; // Correct the path as necessary
import ExerciseDisplay from './exercisedisplay';
import { useNavigate } from 'react-router-dom';
import Signup from './signup';
import Nutrition from './nutrition';
import RecipeDisplay from './recipedisplay';



function Header() {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="logo" />
      <nav className="navigation">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/programs" className="nav-link">Programs</Link>
        <Link to="/nutrition" className="nav-link">Nutrition</Link>
        

        {/* Add Link components for other navigation items as needed */}
      </nav>
      <div className="search-and-button">
        <input type="text" className="search-input" placeholder="Search" />
        <button className="get-started-button">Contact Us</button>
      </div>
    </div>
  );
}

function MainContent() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    console.log('Get Started button clicked');
    // Navigate to the signup/login page
    navigate('/signup');
  };

  return (
    <div className="main-content">
      <div className="text-section">
        <h1>Professional Fitness Workouts For Everyone</h1>
        <p>You can start Fitness Every Day through The Exercises and Recpes that We Provide to You. At Home, Without Any Trouble. Just Start Right Now.</p>
        <div className="buttons">
          <button className="btn get-started" onClick={handleGetStartedClick}>Get Started</button>
          <button className="btn learn-more">Learn More</button>
        </div>
      </div>
      <div className="image-section">
        <img src={gymlady} alt="Fitness Lady" className="gym-lady" />
      </div>
    </div>
  );
}

function Benefits() {
  return (
    <div className="benefits">
      <h2>The Benefits You Have</h2>
      <div className="benefit-items">
        <div className="benefit-item">
          <div className="benefit-icon">👩</div>
          <h3>Female Fat Loss</h3>
          <p>Looking for A Female Fat Burning Program That Achieves Results? Try Our Female Fat Loss Plan which gives personalized workout.</p>
        </div>
        <div className="benefit-item">
          <div className="benefit-icon">👨</div>
          <h3>Male Muscle Building</h3>
          <p>Looking for A Male Muscle Building Program That Achieves Results? Try Our Male workout plan with nutrition requirements.</p>
        </div>
        <div className="benefit-item">
          <div className="benefit-icon">💪</div>
          <h3>Muscle Building</h3>
          <p>Program focused on helping individuals, particularly men, build muscle over a period.</p>
        </div>
      </div>
    </div>
  );
}

// Home component that includes MainContent and Benefits
function Home() {
  return (
    <>
      <MainContent />
      <Benefits />
    </>
  );
}

// App component with React Router setup
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} /> 
          <Route path="/muscleselector" element={<MuscleSelector />} />
          <Route path="/exercisedisplay" element={<ExerciseDisplay/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path ="/bioparameter" element = {<bioparameter/>} />
          <Route path ="/nutrition" element = {<Nutrition/>} />
          <Route path ="/recipedisplay" element = {<RecipeDisplay/>} />
          
         
          {/* Define additional routes for other paths */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;