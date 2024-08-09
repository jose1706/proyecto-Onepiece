import React from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ type, children }) => (
  <button type={type}>
    {children}
  </button>
);