import FancyHeader from '../../components/generalUI/fancyHeader/FancyHeader';
import ActionButton from '../../components/generalUI/actionButton/ActionButton';
import useTranslations from '../../translations/useTranslations';
import s from './Home.module.css';
import Footer from '../../components/footer/Footer';

export const Home = () => {

    const T = useTranslations()

    return (
        <div>
            <div className={s.banner}>
                <div className={s.content}>
                    <div className={s.logo}>{T('logo')}</div>
                    <div className={s.subtitle}>{T('subtitle')}</div>
                </div>
            </div>
            <div className={s.main}>
                <div className={s.mainContent}>
                    <FancyHeader content={T('home_section1_title')}/>
                    <div className={s.textbox}>{T('home_section1_text')}</div>
                </div>
                <div className={s.mainContent}>
                    <FancyHeader content={T('home_section2_title')}/>
                    <div className={s.textbox}>{T('home_section2_text')}</div>
                </div>
                <div className={s.mainContent}>
                    <FancyHeader content={T('home_section3_title')}/>
                    <div className={s.textbox}>{T('home_section3_text')}</div>
                </div>
            </div>
            <div className={s.stickyFooter}>
                <ActionButton label={T('buybutton_label')}/>
            </div>
            <Footer/>
        </div>
        
    )
}