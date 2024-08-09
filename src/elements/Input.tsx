import React from 'react';

interface InputProps {
  type: string;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({ type, placeholder }) => (
  <input type={type} placeholder={placeholder} required />
);
