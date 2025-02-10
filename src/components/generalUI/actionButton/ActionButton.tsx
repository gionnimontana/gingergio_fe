import Spinner from '../spinner/Spinner';
import s from './ActionButton.module.css'

interface ButtonProps {
    label: string;
    onClick?: () => void;
    contrast?: boolean;
    disabled?: boolean;
    isLoading?: boolean;
}

const ActionButton = ({label, onClick, contrast, disabled, isLoading }: ButtonProps) => {
    const className = s.button + (
        contrast ? ' ' + s.backgroundContrast : '') + (
            disabled ? ' ' + s.disabled : '') + (
                isLoading ? ' ' + s.loading : '')
    
    const canClick = !disabled && !isLoading
    
    return (
        <div className={className} onClick={canClick ? onClick : undefined}>
            {isLoading 
                ? <Spinner className={s.spinner}/>
                : label
            }
        </div>
    )
}

export default ActionButton