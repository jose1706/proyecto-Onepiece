import React from "react"
import { InputBox } from "../Components/InputBox";
<<<<<<< HEAD
import { FaLock, FaEnvelope } from 'react-icons/fa';
=======
import { FaLock, FaUser } from 'react-icons/fa';
>>>>>>> b32f9d91afd79fad4b0817c8161efe6bd72bede1
import { Button } from '../elements/Button';
import '../Styles/LoginPage.css'
import { useState } from "react";
import { useAuth } from '../Hooks/useAuth';
import { useNavigate } from "react-router-dom";
import { registeredUsers } from "../mocks/registeredUsers";

export const Forgotpage: React.FC = () => {

    const { updatePassword } = useAuth();
    const navigate = useNavigate();
    
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    

    const handleReset = () => {
        setUsername('');
        setPassword('');
        setPassword2('');
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === password2) {
            updatePassword(username, password);
            window.alert('Contraseña cambiada con éxito');
            navigate('/');
        }
        else{
            window.alert('Las contraseñas no coinciden, por favor verificar');
        }
        console.log(registeredUsers)
        
    }

    return (
        <div className="wrapper">
            <form onReset={handleReset} onSubmit={handleSubmit}>
                <h1>Olvido de contraseña</h1>
<<<<<<< HEAD
                <InputBox type="email" placeholder='Correo electrónico' icon={FaEnvelope} />
                <InputBox type="password" placeholder='Contraseña nueva' icon={FaLock} />
                <InputBox type="password" placeholder='Confirmar contraseña nueva' icon={FaLock} />
=======
                <InputBox className='input-box' type="text" placeholder='Nombre de usuario' icon={FaUser} value={username} 
                    onChange={(e) => setUsername(e.target.value)}/>

                <InputBox className='input-box' type="password" placeholder='Contraseña nueva' icon={FaLock} value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>

                <InputBox className='input-box' type="password" placeholder='Contraseña nueva' icon={FaLock} value={password2} 
                    onChange={(e) => setPassword2(e.target.value)}/>

>>>>>>> b32f9d91afd79fad4b0817c8161efe6bd72bede1
                <Button type="submit">Cambiar contraseña</Button>

                <Button type="reset" buttonNativeProps={{
                style: {
                    marginTop: '1rem',
                }
                    }}>Limpiar campos</Button>

            </form>
        </div>

    )

};