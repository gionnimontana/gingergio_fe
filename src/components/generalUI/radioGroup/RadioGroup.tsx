import { ChangeEventHandler } from 'react';
import s from './RadioGroup.module.css';

interface Props {
    expanded: boolean
    onChange: ChangeEventHandler<HTMLInputElement>
    label: string
    children?: React.ReactNode
    message?: string
} 

export const RadioGroup = ({children, expanded, label, onChange, message}: Props) => {

    return (
        <div className={s.shadowBox}>
            <div className={s.radioGroup}>
                <input checked={expanded} className={s.input} type="radio" onChange={onChange}/>
                <label className={s.inputLabel}>{label}</label>
            </div>
            {expanded && (children || message) ? (
                <>
                    {message ? <div className={s.errorMsg}>{message}</div> : null}
                    <div className={s.expandbox}>
                        {children}
                    </div>
                </>
            ) : null}
        </div>
    );
}
