import s from './ActionButton.module.css'

interface ButtonProps {
    label: string;
    onClick?: () => void;
}

const ActionButton = ({label, onClick}: ButtonProps) => {
    return (
        <div className={s.button} onClick={onClick}>{label}</div>
    )
}

export default ActionButton