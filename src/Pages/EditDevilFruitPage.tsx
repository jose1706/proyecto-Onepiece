import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDevilFruit } from "../Hooks/useDevilFruit";

export const EditDevilFruitPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { AllDevilFruits, updateDevilFruit } = useDevilFruit();
  const navigate = useNavigate();

  const [fruitName, setfruitName] = useState('');
  const [image, setimage] = useState('');
  const [description, setdescription] = useState('');
  const [type, setType] = useState('');
  const [userfruit, setuserfruit] = useState('');

  useEffect(() => {
    const fruit = AllDevilFruits.find(f => f.id === parseInt(id ?? '', 10));
    if (fruit) {
      setfruitName(fruit.name);
      setimage(fruit.image);
      setdescription(fruit.description);
      setType(fruit.type);
      setuserfruit(fruit.user);
    }
  }, [AllDevilFruits, id]);

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    updateDevilFruit(parseInt(id ?? '', 10), {
      name: fruitName,
      image: image,
      description: description,
      type: type,
      user: userfruit
    });
    window.alert('Fruta actualizada exitosamente');
    navigate('/CorePage');
  };

  return (
    <div className="wrapper-register-fruit">
      <form className="form-registered-fruit" onSubmit={handleUpdate}>
        <h1>Editar Fruta</h1>
        <div>
          <input
            className="input-box-fruitregister"
            type="text"
            placeholder="Nombre de fruta"
            value={fruitName}
            onChange={(e) => setfruitName(e.target.value)}
          />
        </div>
        <div>
          <input
            className="input-box-fruitregister"
            type="text"
            placeholder="URL de la imagen"
            value={image}
            onChange={(e) => setimage(e.target.value)}
          />
        </div>
        <div>
          <input
            className="input-box-fruitregister"
            type="text"
            placeholder="Descripción de la fruta"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
        </div>
        <div>
          <input
            className="input-box-fruitregister"
            type="text"
            placeholder="Tipo de fruta"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div>
          <input
            className="input-box-fruitregister"
            type="text"
            placeholder="Usuario de fruta"
            value={userfruit}
            onChange={(e) => setuserfruit(e.target.value)}
          />
        </div>
        <button className="registerFruit-btn" type="submit">Actualizar</button>
      </form>
    </div>
  );
};
