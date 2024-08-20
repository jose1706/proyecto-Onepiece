import React from 'react';
import { Input } from '../elements/Input';

interface InputBoxProps {
  type: string;
  placeholder: string;
  icon: React.ComponentType<{ className: string }>;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
}

export const InputBox: React.FC<InputBoxProps> = ({ className, type, placeholder, icon: Icon, value, onChange }) => (
  <div className={className}>
    <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    <Icon className='icon' />
  </div>
);