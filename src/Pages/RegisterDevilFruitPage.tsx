import React, { useState } from "react"
import '../Styles/LoginPage.css'
import { useDevilFruit } from "../Hooks/useDevilFruit";
import { devilFruits } from "../mocks/registeredDevilfruits";
import { useNavigate } from "react-router-dom";

export const RegisterDevilFruitpage: React.FC = () => {
    const { registerDevilFruits, AllDevilFruits, checkRegisterDevilFruit } = useDevilFruit();

    const [fruitName, setfruitName] = useState('');
    const [image, setimage] = useState('');
    const [description, setdescription] = useState('');
    const [type, setType] = useState('');
    const [userfruit, setuserfruit] = useState('');
    const navigate = useNavigate();

    console.log(devilFruits);

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        const valor = checkRegisterDevilFruit(fruitName, type)
        if (valor === -1) {
            registerDevilFruits(fruitName, image, description, type, userfruit);
            window.alert('Registro de fruta exitoso');
            navigate('/CorePage');
        }else{
            window.alert('La fruta ya existe, por favor verificar');
            handleReset();
        }

    
        console.log('devilfruits:', devilFruits)
        console.log('AllDevilFruits:', AllDevilFruits)

      };

    const handleReset = () => {
        setfruitName('');
        setimage('');
        setdescription('');
        setType('');
        setuserfruit('');
    }


    return (
        <div className="wrapper-register-fruit">
            <form className="form-registered-fruit" onSubmit={handleRegister} onReset={handleReset}>
                <h1>Registro Fruta nueva</h1>
                <div>
                    <input className="input-box-fruitregister" type="text" placeholder='Nombre de fruta' value={fruitName} 
                        onChange={(e) => setfruitName(e.target.value)} required/>
                </div>
                <div>
                    <input className= "input-box-fruitregister" type="url" placeholder='URL de la imagen' value={image}
                        onChange={(e) => setimage(e.target.value)} required />
                </div>

                <div>
                    <input className= "input-box-fruitregister" type="text" placeholder='Descripcion de la fruta' value={description} 
                        onChange={(e) => setdescription(e.target.value)} required />
                </div>

                <div>
                    <input className= "input-box-fruitregister" type="text" placeholder='tipo de la fruta' value={type} 
                        onChange={(e) => setType(e.target.value)} required />
                </div>

                <div>
                    <input className= "input-box-fruitregister" type="text" placeholder='usuario de fruta' value={userfruit} 
                        onChange={(e) => setuserfruit(e.target.value)} required/>
                </div>

                <button className= "registerFruit-btn" type="submit" > Registrar</button>
                <button className= "registerFruit-btn" type="reset"  style={{marginTop: '1rem'}}> Limpiar campos </button>
            </form>
        </div>

    )

};