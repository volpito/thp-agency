import React from 'react';
import { Link } from 'react-router-dom';
import clients from '../../Components/Data/clients';
import '../../App.css'
import ReactMarkdown from 'react-markdown'

const Works = () => {
    return (
    <>
      <ReactMarkdown>### Au fil des années, nous avons pu accompagner les meilleurs.</ReactMarkdown>
      <p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
      <div style={{textAlign: 'center'}}>
      {clients.map((a, i) => {
    return (
      < ><Link to={"/works/" + a.name + "-study-case"} id={i} className="links"> {a.name} </Link></>
    )
  })}</div>
    </>
  ) 
}

export default Works;
