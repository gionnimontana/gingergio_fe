import FancyHeader from '../../components/generalUI/fancyHeader/FancyHeader';
import ActionButton from '../../components/generalUI/actionButton/ActionButton';
import useTranslations from '../../translations/useTranslations';
import s from './Home.module.css';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import { routes } from "../../constants/routes";
import Logo from '../../components/generalUI/logo/Logo';
import FancyTextBox from '../../components/generalUI/fancyTextBox/FancyTextBox';

export const Home = () => {

    const T = useTranslations()
    const navigate = useNavigate()
    const goToMarket = () => {
        navigate(routes.Market)
    }

    return (
        <div>
            <div className={s.banner}>
                <div className={s.content}>
                    <Logo className={s.logo}/>
                    <div className={s.subtitle}>{T('subtitle')}</div>
                </div>
            </div>
            <div className={s.main}>
                <FancyTextBox header={T('home_section1_title')} content={T('home_section1_text')}/>
                <FancyTextBox header={T('home_section2_title')} content={T('home_section2_text')}/>
                <FancyTextBox header={T('home_section3_title')} content={T('home_section3_text')}/>
            </div>
            <div className={s.stickyFooter}>
                <ActionButton label={T('buybutton_label')} onClick={goToMarket}/>
            </div>
            <Footer/>
        </div>
        
    )
}