import s from './ActionButton.module.css'

interface ButtonProps {
    label: string;
    onClick?: () => void;
    contrast?: boolean;
    disabled?: boolean;
}

const ActionButton = ({label, onClick, contrast, disabled }: ButtonProps) => {
    const className = s.button + (contrast ? ' ' + s.backgroundContrast : '') + (disabled ? ' ' + s.disabled : '')
    
    return (
        <div className={className} onClick={disabled ? undefined : onClick}>{label}</div>
    )
}

export default ActionButton