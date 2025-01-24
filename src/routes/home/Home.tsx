import { useNavigate } from 'react-router-dom';
import { routes } from "../../constants/routes";
import useTranslations from '../../translations/useTranslations';
import ActionButton from '../../components/generalUI/actionButton/ActionButton';
import Footer from '../../components/footer/Footer';
import Logo from '../../components/generalUI/logo/Logo';
import FancySection from '../../components/generalUI/fancySection/FancySection';
import StickyFooter from '../../components/generalUI/stickyFooter/StickyFooter';
import s from './Home.module.css';

export const Home = () => {

    const T = useTranslations()
    const navigate = useNavigate()
    const goToMarket = () => {
        navigate(routes.Market)
    }

    return (
        <>
            <div className={s.banner}>
                <div className={s.content}>
                    <Logo className={s.logo}/>
                    <div className={s.subtitle}>{T('subtitle')}</div>
                </div>
            </div>
            <div className={s.main}>
                <div className={s.firstSection}>
                    <img src="/gingergio_face.webp" alt="Ginger Gio" className={s.firstSectionImage}/>
                    <FancySection
                        content={[T('home_section1a_text'), T('home_section1b_text'), T('home_section1c_text')]}
                    />
                </div>
                <FancySection header={T('home_section2_title')} content={T('home_section2_text')}/>
                <FancySection header={T('home_section3_title')} content={T('home_section3_text')}/>
            </div>
            <StickyFooter>
                <ActionButton label={T('buybutton_label')} onClick={goToMarket}/>
            </StickyFooter>
            <Footer/>
        </>
    )
}