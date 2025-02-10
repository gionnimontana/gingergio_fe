
import Logo from '../../components/generalUI/logo/Logo'
import { useLocation, useNavigate } from 'react-router-dom'
import useTranslations from '../../translations/useTranslations'
import { routes } from '../../constants/routes'
import s from './Header.module.css'

const Header = () => {
    
    const T = useTranslations()
    const navigate = useNavigate()
    const location = useLocation()

    const isUserRoute = location.pathname === routes.User

    const goToHome = () => navigate(routes.Home)
    const goBack = () => navigate(-1)
    const goToUser = () => navigate(routes.User)

    const onLogoClick = isUserRoute ? goBack : goToUser

    return (
        <>
            <div className={s.spaceHolder}></div>
            <div className={s.content}>
                <div className={s.logobox} onClick={goToHome}>
                    <Logo className={s.logo}/>
                </div>
                <div className={s.loginIcon} onClick={onLogoClick}>
                    {isUserRoute ? '↞' : '㋡'}
                </div>
            </div>
        </>
    )
}

export default Header