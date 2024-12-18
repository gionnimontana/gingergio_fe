import s from './FancyHeader.module.css';

interface FancyHeaderProps {
    content: string;
}

const FancyHeader = ({ content }: FancyHeaderProps) => {
    return (
        <div className={s.content}>
            {content}
        </div>
    )
}

export default FancyHeader