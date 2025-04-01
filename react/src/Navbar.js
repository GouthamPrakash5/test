import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-header">
          <a href="/" className="navbar-brand">My App</a>
          <button 
            className="navbar-toggle" 
            onClick={toggleNavbar}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggle-icon">
              {isOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>
        
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="/" className="navbar-link">Home</a>
          <a href="/about" className="navbar-link">About</a>
          <a href="/services" className="navbar-link">Services</a>
          <a href="/contact" className="navbar-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;