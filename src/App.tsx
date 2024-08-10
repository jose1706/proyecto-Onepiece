import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Pages/LoginPageR.tsx';
import { Registerpage } from './Pages/RegisterPage.tsx'
import { Forgotpage } from './Pages/passwordForgotPage.tsx'

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/forgot-password" element={<Forgotpage />} />
      </Routes>
    </Router>
  );
};
