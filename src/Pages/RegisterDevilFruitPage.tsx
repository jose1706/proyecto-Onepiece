import React, { useState, useEffect } from "react"
import '../Styles/LoginPage.css'
import { useDevilFruit } from "../Hooks/useDevilFruit";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

export const RegisterDevilFruitpage: React.FC = () => {
    //const { registerDevilFruits, AllDevilFruits, checkRegisterDevilFruit } = useDevilFruit(); //funciones para trabajar con los datos mockeados
    const { getAllDevilFruits, createDevilFruit } = useDevilFruit();
    const { user } = useAuth();
    
    
    const [fruitName, setfruitName] = useState('');
    const [image, setimage] = useState('');
    const [description, setdescription] = useState('');
    const [type, setType] = useState('');
    const [userfruit, setuserfruit] = useState('');
    const navigate = useNavigate();

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

    /* const handleRegister = (e: React.FormEvent) => { //funcion para trabajar con los datos mockeados
        e.preventDefault();
        const valor = checkRegisterDevilFruit(fruitName, type)
        if (valor === -1) {
            registerDevilFruits(fruitName, image, description, type, userfruit);
            window.alert('Registro de fruta exitoso');
            navigate('/CorePage');
        }else{
            window.alert('La fruta ya existe, por favor verificar');
            handleReset();
        } */

        const handleRegister = async (e: React.FormEvent) => { //funcion para trabajar con las peticiones al servidor
            e.preventDefault();
            const fruit = {
                name: fruitName,
                image: image,
                description: description,
                type: type,
                user: userfruit,
                author: user?.username
            }
            const devilFruits = await getAllDevilFruits();
            const valor = devilFruits.findIndex(
                (fruit) => fruit.name.toLocaleLowerCase() === fruitName.toLocaleLowerCase() && fruit.type.toLocaleLowerCase() === type.toLocaleLowerCase()
            );
            console.log(valor, devilFruits[valor]);
            if (valor === -1) { 
                await createDevilFruit(fruit);
                window.alert('Registro de fruta exitoso');
                navigate('/CorePage');
            }else{
                window.alert('La fruta ya existe, por favor verificar');
                handleReset();
            }

      };

    const handleReset = () => {
        setfruitName('');
        setimage('');
        setdescription('');
        setType('');
        setuserfruit('');
    }


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

        <div className="edit-fruit-container">
                <form className="form-registered-fruit" onSubmit={handleRegister} onReset={handleReset}>
                    <h1>Registro Fruta nueva</h1>
                    <div>
                        <label>Nombre de Fruta:</label>
                        <input className="input-box-fruitregister" type="text"  value={fruitName} 
                            onChange={(e) => setfruitName(e.target.value)} required/>
                    </div>
                    <div>
                        <label>URL de la imagen:</label>
                        <input className= "input-box-fruitregister" type="url"  value={image}
                            onChange={(e) => setimage(e.target.value)} required />
                    </div>

                    <div>
                        <label>Descripción de la fruta:</label>
                        <input className= "input-box-fruitregister" type="text"  value={description} 
                            onChange={(e) => setdescription(e.target.value)} required />
                    </div>

                    <div> 
                        <label>Tipo de la fruta:</label>
                        <input className= "input-box-fruitregister" type="text"  value={type} 
                            onChange={(e) => setType(e.target.value)} required />
                    </div>

                    <div>
                        <label>Usuario de la fruta:</label>  
                        <input className= "input-box-fruitregister" type="text"  value={userfruit} 
                            onChange={(e) => setuserfruit(e.target.value)} required/>
                    </div>

                    <div>
                        <label>Autor:</label> 
                        <input className="input-box-fruitregister" type="text" value={user?.username ?? "Desconocido"} disabled /> 
                        {/* El autor se rellena automáticamente con el usuario logueado */}
                    </div>

                    <button className= "registerFruit-btn" type="submit" > Registrar</button>
                    <button className= "registerFruit-btn" type="reset"  style={{marginTop: '1rem'}}> Limpiar campos </button>
                </form>
                {image && (
                <div className="image-preview">
                    <img src={image} alt="Vista previa de la fruta" />
                </div>
            )}
        </div>
    </>
    )

};