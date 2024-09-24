import React, { useState, useEffect } from 'react';
import { InputBox } from '../Components/InputBox';
import { RegisterForgot } from '../Components/RegisterForgot';
//import { RegisterLink } from '../Components/RegisterLink';
import { Button } from '../elements/Button';
import { FaUser, FaLock } from 'react-icons/fa';
import '../Styles/LoginPage.css'
import { useAuth } from '../Hooks/useAuth';
//import { registeredUsers } from '../mocks/registeredUsers'; //se usa para el frontend con datos mockeados
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {

  //const {  checkRegister, user, isLoggedIn, logIn } = useAuth(); // se utiliza cuando no se conecta con el backend

  const { user, isLoggedIn, logIn, getAllUsers} = useAuth(); // lo que se trae del usercontext para tarabajar con el backend


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  /* //funcion que se usa sin el backend
  const handleSubmit = (e: React.FormEvent) => { 
    e.preventDefault();
    const index = checkRegister(username, password);
    if (index === -1) {
      window.alert('Usuario no encontrado. Por favor, regístrate.');
    } else {
      logIn(registeredUsers[index]);
      navigate('/CorePage');
    }
  }; */


  //funcion con el backend, conetada al servidor
  const handleSubmit1 = async (e: React.FormEvent) => {
    e.preventDefault();
    const dataUsers = await getAllUsers();
    const index = dataUsers.findIndex(
      (user) => user.username === username && user.password === password
  );
    if (index === -1) {
      window.alert('Usuario no encontrado. Por favor, regístrate.');
    } else {
      logIn(dataUsers[index]);
      navigate('/CorePage');
    }
  };

  useEffect(() => {
    console.log(user);  // Esto se ejecutará cuando 'user' cambie
    console.log(isLoggedIn);  // Esto se ejecutará cuando 'isLoggedIn' cambie
  }, [user, isLoggedIn]);



  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit1} >
        <h1>Ingreso frutipedia</h1>
        <InputBox 
          className='input-box'
          type="text" 
          placeholder="Nombre de usuario" 
          icon={FaUser} 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputBox
          className='input-box'
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