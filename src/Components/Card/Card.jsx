import React from 'react';
import './Card.css';

function Card({emoji, heading, detail}) {
  return (
    <div className='Card'>
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="card-button">Learn More </button>
    </div>
  )
}

export default Card;