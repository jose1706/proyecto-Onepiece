import React from "react"
import { InputBox } from "../Components/InputBox";
import { FaLock } from 'react-icons/fa';
import { Button } from '../elements/Button';
import '../Styles/LoginPage.css'

export const Forgotpage: React.FC = () => {
    return (
        <div className="wrapper">
            <form>
                <h1>Olvido de contraseña</h1>
                <InputBox type="password" placeholder='Contraseña nueva' icon={FaLock} />
                <InputBox type="password" placeholder='Confirmar contraseña nueva' icon={FaLock} />
                <Button type="submit">Cambiar contraseña</Button>
            </form>
        </div>

    )

};