import React, { createContext, useContext } from 'react';
import ThemeContext from '../../ThemeContext';
import Theme from '../../Theme'

const Button = () => {

  const handleClick = () => {
    console.log('bisou')
  }

return(
    <button style={{float: 'right'}} className="theme" onClick={handleClick} type="button">bisouMode</button>
  )
}

export default Button;