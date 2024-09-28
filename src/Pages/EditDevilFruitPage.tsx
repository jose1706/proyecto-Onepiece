import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDevilFruit } from "../Hooks/useDevilFruit";
import { NavLink } from "react-router-dom";

export const EditDevilFruitPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  //const { AllDevilFruits, updateDevilFruit } = useDevilFruit();// funciones para usar sin el servidor
  const { AllDevilFruits, updateDevilFruitBack } = useDevilFruit();// funciones para usar con el servidor
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

  useEffect(() => {
    document.body.style.background = "inherit";
    document.body.style.display = "inherit";
    document.body.style.justifyContent = "inherit"
    document.body.style.alignItems = "inherit";
    document.body.style.minWidth = "inherit";
    document.body.style.minHeight = "inherit";
    document.body.style.backgroundSize = "inherit";
    document.body.style.backgroundPosition = "inherit";
    return () => {
        document.body.style.background = "";
        document.body.style.display = "";
        document.body.style.justifyContent = ""
        document.body.style.alignItems = "";
        document.body.style.minWidth = "";
        document.body.style.minHeight = "";
        document.body.style.backgroundSize = "";
        document.body.style.backgroundPosition = "";
    };
  }, []);

  /* const handleUpdate = (e: React.FormEvent) => { //para usar con los datos mockeados sin el servidor
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
  }; */

  const handleUpdate = async (e: React.FormEvent) => { 
    e.preventDefault();
    const updatedDevilFruit = {
      name: fruitName,
      image: image,
      description: description,
      type: type,
      user: userfruit
    };
    await updateDevilFruitBack(parseInt(id?? '', 10), updatedDevilFruit); // para usar con el servidor
    window.alert('Fruta actualizada exitosamente');
    navigate('/CorePage');
  };

  return (
    <>
      <header className='browser-bar'>
        <NavLink to='/CorePage' className='browser-bar__logo'>
          <img
            src='https://1000marcas.net/wp-content/uploads/2022/10/One-Piece-Emblem.png'
            alt='Logo onePiece'
            className='browser-bar__logo-img'
          />
        </NavLink>
      </header>
      
      {/* Contenedor que envuelve el formulario y la vista previa */}
      <div className="edit-fruit-container">
        <form className="form-registered-fruit" onSubmit={handleUpdate}>
          <h1>Editar Fruta</h1>
          <div>
            <label>Nombre de fruta:</label>
            <input
              className="input-box-fruitregister"
              type="text"
              placeholder="Nombre de fruta"
              value={fruitName}
              onChange={(e) => setfruitName(e.target.value)}
            />
          </div>
          <div>
            <label>URL de la imagen:</label>
            <input
              className="input-box-fruitregister"
              type="text"
              placeholder="URL de la imagen"
              value={image}
              onChange={(e) => setimage(e.target.value)}
            />
          </div>
          <div>
            <label>Descripción de la fruta:</label>
            <input
              className="input-box-fruitregister"
              type="text"
              placeholder="Descripción de la fruta"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            />
          </div>
          <div>
            <label>Tipo de fruta:</label>
            <input
              className="input-box-fruitregister"
              type="text"
              placeholder="Tipo de fruta"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div>
            <label>Usuario de la fruta:</label>
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

        {/* Vista previa de la imagen al lado del formulario */}
        {image && (
          <div className="image-preview">
            <img src={image} alt="Vista previa de la fruta" />
          </div>
        )}
      </div>
    </>
  );
};
