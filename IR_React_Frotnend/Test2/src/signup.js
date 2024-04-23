// signup.js
import React, { useState } from 'react';
import './signup.css';

function Signup() {
  const [isLoginActive, setIsLoginActive] = useState(true);

  const toggleActive = () => {
    setIsLoginActive(!isLoginActive);
  };

  return (
    <div className="signup-background">
      <div className="signup-container">
        <div className="signup-form">
          <div className="toggle-buttons">
            <button 
              className={`toggle-btn ${isLoginActive ? 'active' : ''}`} 
              onClick={toggleActive}
            >
              Login
            </button>
            <button 
              className={`toggle-btn ${!isLoginActive ? 'active' : ''}`} 
              onClick={toggleActive}
            >
              Signup
            </button>
          </div>
          {isLoginActive ? (
            <form className="form">
              <div className="form-group">
                <input type="text" className="form-input" placeholder="Username" required />
              </div>
              <div className="form-group">
                <input type="password" className="form-input" placeholder="Password" required />
              </div>
              <button type="submit" className="form-submit">Login</button>
            </form>
          ) : (
            <form className="form">
              <div className="form-group">
                <input type="text" className="form-input" placeholder="Username" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-input" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <input type="password" className="form-input" placeholder="Create Password" required />
              </div>
              <button type="submit" className="form-submit">Signup</button>
            </form>
          )}
          <div className="form-footer">
            {isLoginActive ? (
              <>
                <a href="#" className="form-link">Forgot password?</a>
                <a href="#" className="form-link" onClick={toggleActive}>Not a member? Signup now</a>
              </>
            ) : (
              <>
                <a href="#" className="form-link" onClick={toggleActive}>Already have an account? Login</a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
