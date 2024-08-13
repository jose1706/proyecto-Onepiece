import React from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  buttonNativeProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

export const Button: React.FC<ButtonProps> = ({ type, children, buttonNativeProps }) => (
  <button type={type} {...buttonNativeProps}>
    {children}
  </button>
);