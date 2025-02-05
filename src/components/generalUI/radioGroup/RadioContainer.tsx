import s from './RadioGroup.module.css';

interface Props {
    children?: React.ReactNode;
}

export const RadioContainer = ({children}: Props) => {
    return (
        <div className={s.radioContainer}>
            {children}
        </div>
    );
}
