import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDevilFruit } from '../Hooks/useDevilFruit';

export const DevilFruitPage: React.FC = () => {
  const { AllDevilFruits, searchTerm } = useDevilFruit();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const fruit = AllDevilFruits.find(f => f.id === parseInt(id ?? '', 10));
  console.log(fruit, fruit?.author);

  useEffect(() => {
    if (searchTerm) {
      const foundFruit = AllDevilFruits.find(f => 
        f.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (foundFruit) {
        navigate(`/CorePage/DevilFruit/${foundFruit.id}`); // una vez dentro de las pagina de la fruta, hace la busqueda pero a al pagina detallada
      }
    }
  }, [searchTerm, AllDevilFruits, navigate]);

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
        <p><strong>Autor:</strong> {fruit.author}</p>
      </div>
    </div>
  );
};
