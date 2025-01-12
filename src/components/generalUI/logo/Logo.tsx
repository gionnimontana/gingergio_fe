import useTranslations from '../../../translations/useTranslations'
import s from './Logo.module.css';

interface Props {
    className?: string
}

const Logo = ({ className }: Props) => {

    const T = useTranslations()
    const logoClass = `${s.logo} ${className}`

    return (
        <div className={logoClass}>
            {T('logo')}
        </div>
    );
}

export default Logo;