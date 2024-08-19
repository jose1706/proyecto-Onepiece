import React from 'react';
import { Link } from 'react-router-dom';
import { DevilFruits } from '../types';


interface CardFruitProps {
  fruit: DevilFruits;
}

export const CardFruit: React.FC<CardFruitProps> = ({ fruit }) => {
  return (
    <Link to={`DevilFruit/${fruit.id}`} className='card-fruit'>
      <div className='card-img'>
        <img
          src={fruit.image}
          alt={`Fruta ${fruit.name}`}
        />
      </div>
      <div className='card-info'>
        <span className='fruit-id'>ID: {fruit.id}</span>
        <h3>{fruit.name}</h3>
        <div className='card-type'>
          <span className={fruit.type.toLowerCase()}>
            {fruit.type}
          </span>
        </div>
      </div>
    </Link>
  );
};
