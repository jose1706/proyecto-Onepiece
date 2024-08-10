import React from 'react'; //revisar importancia de este componente
import { Link } from 'react-router-dom';

export const RegisterLink: React.FC = () => (
  <div className="register-link">
    <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
  </div>
);