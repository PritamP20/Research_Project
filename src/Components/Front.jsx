import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Front.css'; 

const Front = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/home');
  };

  return (
    <div className="front-container">
      <div className="intro-content">
        <h1 className="catchy-text">Welcome to Our Awesome Survey</h1>
        <p className="description">"Unlock insights, spark conversations, and shape the future with our engaging surveys. Your voice matters!"</p>
        <blockquote className="quote">"Surveys are the compass that guides us through the vast terrain of human experience."</blockquote>
        <button className="get-started-button" onClick={handleGetStarted}>Get Started</button>
      </div>
    </div>
  );
}

export default Front;
