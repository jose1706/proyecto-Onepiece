import React from 'react';
import { CardFruit } from './CardFruit';
import { useDevilFruit } from '../Hooks/useDevilFruit';

export const DevilFruitList: React.FC = () => {
  const { AllDevilFruits, searchTerm } = useDevilFruit();
  
  const filteredFruits = AllDevilFruits.filter(fruit =>
    fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filteredFruits.length === 0) {
    return <div>No se encontraron frutas con ese nombre.</div>;
  }

  return (
    <div className='fruit-list'>
      {filteredFruits.map(fruit => (
        <CardFruit key={fruit.id} fruit={fruit} />
      ))}
    </div>
  );
};
