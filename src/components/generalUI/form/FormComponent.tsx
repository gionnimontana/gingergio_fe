import { ChangeEvent } from 'react'
import s from './FormComponent.module.css'
import React from 'react';
import useTranslations from '../../../translations/useTranslations';

interface FormProps {
  text: string;
  setText: (text: string) => void;
  className?: string
  label?: string
  isPassword?: boolean
  textarea?: boolean
}

export const FormComponent: React.FC<FormProps> = ({ text, setText, className, label, isPassword, textarea }) => {
  const [showPassword, setShowPassword] = React.useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const T = useTranslations()

  const component = textarea ? 'textarea' : 'input'
  const inputClass = textarea ? `${s.input} ${s.doubleHeight}` : s.input

  return (
    <form className={className}>
        {label ? <div className={s.label}>{label}</div> : null}
        {React.createElement(component, {
            value: text,
            onChange: handleChange,
            className: inputClass,
            type: isPassword && showPassword ? 'password' : 'text',
        })}
        {isPassword ? (
          <div 
            className={s.showPassword} 
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? T('showPassword') : T('hidePassword')}
          </div> 
        ) : null}
  
    </form>
  );
}

