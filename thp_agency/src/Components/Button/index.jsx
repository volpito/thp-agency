import React from 'react';


const Button = () => {

  const handleClick = () => {
    console.log('bisou')
  }

return(
    <button style={{float: 'right'}} className="theme" onClick={handleClick} type="button">bisouMode</button>
  )
}

export default Button;