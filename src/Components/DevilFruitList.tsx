import React from 'react';
import { CardFruit } from './CardFruit';
import { useDevilFruit } from '../Hooks/useDevilFruit';

export const DevilFruitList: React.FC = () => {
  const { AllDevilFruits } = useDevilFruit();
  return (
    <div className='fruit-list'>
      {AllDevilFruits.map(fruit => (
        <CardFruit key={fruit.id} fruit={fruit} />
      ))}
    </div>
  );
};
