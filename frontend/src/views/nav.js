import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav1">
      <div className="buttons">
        <Link to="/"><button id="homeButton">Home</button></Link>
        <Link to="/contact"><button id="contactButton">Contact</button></Link>
      </div>
    </nav>
  );
};

export default NavBar;
