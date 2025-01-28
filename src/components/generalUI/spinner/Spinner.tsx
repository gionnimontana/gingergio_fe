import s from './Spinner.module.css';

const Spinner = () => {
    return (
        <div className={s.container}>
            <div className={s.spinner}></div>
        </div>
    )
}

export default Spinner;