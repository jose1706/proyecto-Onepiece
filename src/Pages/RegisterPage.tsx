import React, { useState } from "react"
import { InputBox } from "../Components/InputBox";
import { FaLock, FaEnvelope, FaUserNinja } from 'react-icons/fa';
import { Button } from '../elements/Button';
import '../Styles/LoginPage.css'
import { useAuth } from '../Hooks/useAuth';
//import { registeredUsers } from "../mocks/registeredUsers"; // se usa cuando no existe el servidor
import { useNavigate } from 'react-router-dom';

export const Registerpage: React.FC = () => {
    //const { register } = useAuth(); // se usa cuando no existe el servidor
    const { getAllUsers, createUser } = useAuth(); // se usa cuando para conectarse con el servidor y la base de datos

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [password2, setPassword2] = useState('');
    const navigate = useNavigate();

    /* const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        if (password!== password2) {
            window.alert('Las contraseñas no coinciden, por favor verificar');
        }
        else{
            const valor = register(username, password, email);
            if(valor){
                window.alert('Registro exitoso');
                navigate('/');
            }else{
                setUsername('');
            }
        }
        console.log(registeredUsers)

      }; */


      const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password!== password2) {
            window.alert('Las contraseñas no coinciden, por favor verificar');
        }
        else{
            const user = {
                username,
                password,
                email
            }
            const users = await getAllUsers();
            const userIn = users.findIndex(
                (user) => user.username === username
            );
            if (userIn === -1) {
                await createUser(user);
                window.alert('Registro exitoso');
                navigate('/');
                console.log(users);
            }else {
                window.alert('Nombre de usuario ya existente, por favor ingrese uno diferente');
                setUsername('');
            }
        }

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
                <InputBox className = "input-box" type="text" placeholder='Nombre de usuario' icon={FaUserNinja} value={username} 
                 onChange={(e) => setUsername(e.target.value)} />

                <InputBox className = "input-box" type="email" placeholder='Correo electrónico' icon={FaEnvelope} value={email}
                 onChange={(e) => setEmail(e.target.value)}/>

                <InputBox className = "input-box" type="password" placeholder='Contraseña' icon={FaLock} value={password} 
                 onChange={(e) => setPassword(e.target.value)}/>

                <InputBox className = "input-box" type="password" placeholder='Confirmar contraseña' icon={FaLock} value={password2} 
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