import React, { useState } from "react"
import { InputBox } from "../Components/InputBox";
import { FaLock, FaEnvelope, FaUserNinja } from 'react-icons/fa';
import { Button } from '../elements/Button';
import '../Styles/LoginPage.css'
import { useAuth } from '../Hooks/useAuth';
import { registeredUsers } from "../mocks/registeredUsers";
import { useNavigate } from 'react-router-dom';

export const Registerpage: React.FC = () => {
    const { register } = useAuth();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [password2, setPassword2] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (password!== password2) {
            window.alert('Las contraseñas no coinciden, por favor verificar');
        }
        else{
            register(username, password, email);
            window.alert('Registro exitoso');
            navigate('/');
        }
        console.log(registeredUsers)

      };

    const handleReset = () => {
        setUsername('');
        setPassword('');
        setEmail('');
        setPassword2('');
    }


    return (
        <div className="wrapper">
            <form onSubmit={handleRegister} onReset={handleReset}>
                <h1>Registro usuario nuevo</h1>
                <InputBox type="text" placeholder='Nombre de usuario' icon={FaUserNinja} value={username} 
                 onChange={(e) => setUsername(e.target.value)} />

                <InputBox type="email" placeholder='Correo electrónico' icon={FaEnvelope} value={email}
                 onChange={(e) => setEmail(e.target.value)}/>

                <InputBox type="password" placeholder='Contraseña' icon={FaLock} value={password} 
                 onChange={(e) => setPassword(e.target.value)}/>

                <InputBox type="password" placeholder='Confirmar contraseña' icon={FaLock} value={password2} 
                 onChange={(e) => setPassword2(e.target.value)}/>

                <Button type="submit">Registrar</Button>

                <Button type="reset" buttonNativeProps={{
                style: {
                    marginTop: '1rem',
                }
                    }}>Limpiar campos</Button>

            </form>
        </div>

    )

};