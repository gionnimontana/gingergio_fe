import Spinner from "../spinner/Spinner";
import s from './LoadingSection.module.css';

interface Props {
    isLoading: boolean;
    isError: boolean;
    children: React.ReactNode;
    className?: string;
}

const LoadingSection = ({ isLoading, isError, children, className }: Props) => {

    const cn = `${s.container} ${className}`;

    return (
        <>
            {isLoading && (
                <div className={cn}>
                    <Spinner />
                </div>
            )}
            {isError && <div>🐛 Error on loading, I'm sorry 🌝</div>}
            {!isLoading && !isError && children}
        </>
    );
}

export default LoadingSection;