import s from './Modal.module.css'

interface Props {
    children: React.ReactNode
    onClose?: () => void
    loading?: boolean
}

export const Modal = ({ children, onClose, loading }: Props) => {
    return (
        <div className={s.container}>
            {onClose 
                ? (
                    <button 
                        onClick={onClose} 
                        className={s.closeButton}
                    >
                        X
                    </button> 
                    )
                : null
            }
            {children}
        </div>
    )
}