import React from 'react';
import { Input } from '../elements/Input.tsx';

interface InputBoxProps {
  type: string;
  placeholder: string;
  icon: React.ComponentType<{ className: string }>;
}

export const InputBox: React.FC<InputBoxProps> = ({ type, placeholder, icon: Icon }) => (
  <div className="input-box">
    <Input type={type} placeholder={placeholder} />
    <Icon className='icon' />
  </div>
);