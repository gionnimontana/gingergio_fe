import { ChangeEventHandler } from 'react';
import s from './RadioGroup.module.css';

interface Props {
    expanded: boolean
    onChange: ChangeEventHandler<HTMLInputElement>
    label: string
    children?: React.ReactNode
} 

export const RadioGroup = ({children, expanded, label, onChange}: Props) => {

    return (
        <div className={s.shadowBox}>
            <div className={s.radioGroup}>
                <input checked={expanded} className={s.input} type="radio" onChange={onChange}/>
                <label className={s.inputLabel}>{label}</label>
            </div>
            {expanded ? (
                <div className={s.expandbox}>
                    {children}
                </div>
            ) : null}
        </div>
    );
}
