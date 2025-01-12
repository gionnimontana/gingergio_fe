
import Logo from '../../components/generalUI/logo/Logo'
import { useNavigate } from 'react-router-dom'
import useTranslations from '../../translations/useTranslations'
import { routes } from '../../constants/routes'
import s from './Header.module.css'

const Header = () => {
    
    const T = useTranslations()
    const navigate = useNavigate()
    const goToHome = () => {
        navigate(routes.Home)
    }

    return (
        <div className={s.content}>
            <div className={s.logobox} onClick={goToHome}>
                <Logo className={s.logo}/>
            </div>
        </div>
    )
}

export default Header