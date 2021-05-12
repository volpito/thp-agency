import React from 'react';
import { Link } from 'react-router-dom';
import clients from '../../Components/Data/clients';
import style from '../../style.css'

const Works = () => {
    return (
    <>
      <h1>Works</h1>
      {clients.map((a, i) => {
        localStorage.setItem(i, a.name)
    return (
      < ><Link to={"/works/" + a.name + "-study-case"} id={i} style={{color: "white"}}>{a.name} </Link></>
    )
  })}
    </>
  ) 
}

export default Works;
