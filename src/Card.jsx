import React from 'react';
import './Card.css';

function Card({ name, favoriteColor }) {
  return (
    <div className="card">
      <h2>{name}'s favorite color is {favoriteColor}.</h2>
    </div>
  );
}

export default Card;
