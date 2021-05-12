import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/index';
import style from './style.css'

const Navbar = () => {
  return (
    <nav >
    <ul>
      <Link to="/" style={{color: "white"}}>_Home___</Link>  
      <Link to="/about" style={{color: "white"}}>About___</Link>  
      <Link to="/works" style={{color: "white"}}>Works_</Link>
      <Button />
    </ul>
    </nav>
    
  )
}

export default Navbar;
