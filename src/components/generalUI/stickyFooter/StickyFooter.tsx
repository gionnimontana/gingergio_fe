import s from './StickyFooter.module.css';

interface Props {
    children: React.ReactNode
}

const StickyFooter = ({ children }: Props) => {
    return (
        <div className={s.container}>
            {children}
        </div>
    );
}

export default StickyFooter;