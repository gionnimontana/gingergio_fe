import Spinner from '../spinner/Spinner';
import s from './ActionButton.module.css'

interface ButtonProps {
    label: string;
    onClick?: () => void;
    contrast?: boolean;
    disabled?: boolean;
    isLoading?: boolean;
    short?: boolean;
    className?: string;
}

const ActionButton = ({label, onClick, contrast, disabled, isLoading, short, className }: ButtonProps) => {
    
    const getButtonClassName = () => {
        let cn = s.button;
        if (contrast) cn += ' ' + s.backgroundContrast;
        if (disabled) cn += ' ' + s.disabled;
        if (isLoading) cn += ' ' + s.loading;
        if (short) cn += ' ' + s.short;
        if (className) cn += ' ' + className;
        return cn;
    }
    
    const canClick = !disabled && !isLoading
    
    return (
        <div className={getButtonClassName()} onClick={canClick ? onClick : undefined}>
            {isLoading 
                ? <Spinner className={s.spinner}/>
                : label
            }
        </div>
    )
}

export default ActionButton