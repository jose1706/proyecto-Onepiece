import React from 'react';
import { Input } from '../elements/Input';

interface InputBoxProps {
  type: string;
  placeholder: string;
  icon: React.ComponentType<{ className: string }>;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBox: React.FC<InputBoxProps> = ({ type, placeholder, icon: Icon, value, onChange }) => (
  <div className="input-box">
    <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    <Icon className='icon' />
  </div>
);