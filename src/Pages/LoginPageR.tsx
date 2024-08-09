import React from 'react';
import { InputBox } from '../Components/InputBox';
import { RegisterForgot } from '../Components/RegisterForgot';
import { RegisterLink } from '../Components/RegisterLink';
import { Button } from '../elements/Button';
import { FaUser, FaLock } from 'react-icons/fa';
import '../Styles/LoginPage.css'

export const Login: React.FC = () => {
  return (
    <div className="wrapper">
      <form>
        <h1>Login</h1>
        <InputBox type="text" placeholder='Nombre de usuario' icon={FaUser} />
        <InputBox type="password" placeholder='Contraseña' icon={FaLock} />
        <RegisterForgot />
        <Button type="submit">Iniciar sesión</Button>
        <RegisterLink />
      </form>
    </div>
  );
};