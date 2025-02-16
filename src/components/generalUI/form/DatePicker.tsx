import React from 'react';
import useTranslations from '../../../translations/useTranslations';
import s from './FormComponent.module.css'

interface FormProps {
  className?: string
  label?: string
  onChange: React.Dispatch<React.SetStateAction<Date | undefined>>
  delayed?: boolean
}

export const DatePicker: React.FC<FormProps> = ({ className, label, onChange, delayed }) => {

  const T = useTranslations()
  const today = new Date().toISOString().split(".")[0].slice(0, -3);
  const dayFromNow = 15
  const dalayedDate = new Date(new Date().getTime() + dayFromNow * 60000000).toISOString().split(".")[0].slice(0, -3);
  const maxDate = new Date(new Date().getTime() + 100 * 60000000).toISOString().split(".")[0].slice(0, -3);

  const onDateStringChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(new Date(event.target.value))
  }

  return (
    <form className={className}>
        {label ? <div className={s.label}>{label}</div> : null}
        <input 
            className={s.input} 
            type="datetime-local" 
            onChange={onDateStringChange} 
            min={delayed ? dalayedDate : today}
            max={maxDate}
        />
    </form>
  );
}

