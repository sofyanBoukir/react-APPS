import React, { useContext } from 'react'
import image from './messi.webp'
import  {AppContext}  from './App'

const Card = () => {
    const isDarkMode = useContext(AppContext);
  return (
    <div className={`card ${isDarkMode?`darkMode`:''}`}>
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text">Last updated 3 mins ago</small></p>
        </div>
    </div>
  )
}

export default Card;
