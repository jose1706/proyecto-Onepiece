import React from 'react';
import { useParams } from 'react-router-dom';
import { useDevilFruit } from '../Hooks/useDevilFruit';

export const DevilFruitPage: React.FC = () => {
    
  const { AllDevilFruits } = useDevilFruit();

    const { id } = useParams<{ id: string }>();
  
    const fruit = AllDevilFruits.find(f => f.id === parseInt(id ?? '', 10));

    if (!fruit) {
        return <div>Fruta no encontrada</div>;
    }

    return (
      <div className="fruit-page">
        <img className="fruit-image" src={fruit.image} alt={fruit.name} />
        <div className="fruit-info">
          <h1>{fruit.name}</h1>
          <p>{fruit.description}</p>
          <p><strong>Tipo:</strong> {fruit.type}</p>
          <p><strong>Usuario:</strong> {fruit.user}</p>
        </div>
      </div>
    );
};