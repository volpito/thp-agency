import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/index';

const Navbar = () => {
  return (
    <nav >
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/works">Works</Link></li>
      <Button />
    </ul>
    </nav>
    
  )
}

export default Navbar;
