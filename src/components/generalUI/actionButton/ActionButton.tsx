import Spinner from '../spinner/Spinner';
import s from './ActionButton.module.css'

interface ButtonProps {
    label: string;
    onClick?: () => void;
    contrast?: boolean;
    disabled?: boolean;
    isLoading?: boolean;
    short?: boolean;
}

const ActionButton = ({label, onClick, contrast, disabled, isLoading, short }: ButtonProps) => {
    const className = s.button + (
        contrast ? ' ' + s.backgroundContrast : '') + (
            disabled ? ' ' + s.disabled : '') + (
                isLoading ? ' ' + s.loading : '') + (
                    short ? ' ' + s.short : ''
                )
    
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