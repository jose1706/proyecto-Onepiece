import React, { useState, useEffect } from 'react';
import { InputBox } from '../Components/InputBox';
import { RegisterForgot } from '../Components/RegisterForgot';
//import { RegisterLink } from '../Components/RegisterLink';
import { Button } from '../elements/Button';
import { FaUser, FaLock } from 'react-icons/fa';
import '../Styles/LoginPage.css'
import { useAuth } from '../Hooks/useAuth';
import { registeredUsers } from '../mocks/registeredUsers';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {

  const {  checkRegister, user, isLoggedIn, logIn} = useAuth();


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const index = checkRegister(username, password);
    if (index === -1) {
      window.alert('Usuario no encontrado. Por favor, regístrate.');
    } else {
      logIn(registeredUsers[index]);
      navigate('/CorePage');
    }
  };
  useEffect(() => {
    console.log(user);  // Esto se ejecutará cuando 'user' cambie
    console.log(isLoggedIn);  // Esto se ejecutará cuando 'isLoggedIn' cambie
  }, [user, isLoggedIn]);



  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit} >
        <h1>Ingreso frutipedia</h1>
        <InputBox 
          type="text" 
          placeholder="Nombre de usuario" 
          icon={FaUser} 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputBox 
          type="password" 
          placeholder="Contraseña" 
          icon={FaLock} 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <RegisterForgot />
        <Button type="submit">Iniciar sesión</Button>
      </form>
    </div>
  );
};