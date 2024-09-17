import React from 'react';
import { Link } from 'react-router-dom';
import { DevilFruits } from '../types';
import { useDevilFruit } from '../Hooks/useDevilFruit';
import { devilFruits } from '../mocks/registeredDevilfruits';
import { FaTrashAlt, FaEdit } from "react-icons/fa";

interface CardFruitProps {
  fruit: DevilFruits;
}

export const CardFruit: React.FC<CardFruitProps> = ({ fruit }) => {
  const { removeDevilFruit, AllDevilFruits } = useDevilFruit();

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation(); // Para evitar que el clic en el botón de eliminación también active el Link
    if (window.confirm('¿Estás seguro de que deseas eliminar esta fruta?')) {
      removeDevilFruit(fruit.id);
    }
    console.log(AllDevilFruits);
    console.log(devilFruits);
  };

  return (
    <div className='card-fruit'>
      <Link to={`DevilFruit/${fruit.id}`} className='card-link'>
        <div className='card-img'>
          <img
            src={fruit.image}
            alt={`Fruta ${fruit.name}`}
          />
        </div>
        <div className='card-info'>
          <h3>{fruit.name}</h3>
          <div className='card-type'>
            <span className={fruit.type.toLowerCase()}>
              {fruit.type}
            </span>
          </div>
        </div>
      </Link>
      <div className="card-actions">
        <Link to={`/EditDevilFruitpage/${fruit.id}`}>
          <button className='btn-edit'>
            <FaEdit />
          </button>
        </Link>
        <button onClick={handleDelete} className='btn-delete'>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

