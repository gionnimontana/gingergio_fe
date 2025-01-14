import s from './ActionButton.module.css'

interface ButtonProps {
    label: string;
    onClick?: () => void;
    contrast?: boolean;
}

const ActionButton = ({label, onClick, contrast}: ButtonProps) => {
    const className = s.button + (contrast ? ' ' + s.backgroundContrast : '')
    
    return (
        <div className={className} onClick={onClick}>{label}</div>
    )
}

export default ActionButton