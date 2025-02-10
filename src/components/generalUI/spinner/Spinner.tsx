import s from './Spinner.module.css';

interface Props {
    className?: string
}

const Spinner = ({ className }: Props) => {

    const cn = className ? s.spinner + ' ' + className : s.spinner

    return (
        <div className={cn}></div>
    )
}

export default Spinner;