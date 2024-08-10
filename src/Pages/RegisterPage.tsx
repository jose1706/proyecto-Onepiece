import React from "react"
import { InputBox } from "../Components/InputBox";
import { FaLock, FaUser, FaEnvelope, FaUserNinja } from 'react-icons/fa';
import { Button } from '../elements/Button';
import '../Styles/LoginPage.css'

export const Registerpage: React.FC = () => {
    return (
        <div className="wrapper">
            <form>
                <h1>Registro usuario nuevo</h1>
                <InputBox type="text" placeholder='Nombre completo' icon={FaUser} />
                <InputBox type="text" placeholder='Nombre de usuario' icon={FaUserNinja} />
                <InputBox type="email" placeholder='Correo electrónico' icon={FaEnvelope} />
                <InputBox type="password" placeholder='Contraseña' icon={FaLock} />
                <InputBox type="password" placeholder='Confirmar contraseña' icon={FaLock} />
                <Button type="submit">Registrar</Button>
            </form>
        </div>

    )

};