import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Navbar = () => {
  return (
    <nav >
    <ul>
      <Link to="/" className="link" >Home</Link>  
      <Link to="/about" className="link">About</Link>  
      <Link to="/works" className="link">Works</Link>
    </ul>
    </nav>
    
  )
}

export default Navbar;
