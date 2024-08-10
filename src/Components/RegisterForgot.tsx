import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterForgot: React.FC = () => (
  <div className="register-forgot">
    <label><input type='checkbox' /> Recuerdame</label>
    <p><Link to="/forgot-password">Olvido su contraseña?</Link></p>
  </div>
);