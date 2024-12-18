import useTranslations from '../../translations/useTranslations';
import s from './Footer.module.css';

const Footer = () => {

    const T = useTranslations()

    const switchLanguage = () => {
        const lang = localStorage.getItem('lang') === 'en' ? 'it' : 'en';
        localStorage.setItem('lang', lang);
        window.location.reload();
    }

    return (
        <div className={s.footer}>
            <div>{T('footer_text')}</div>
            <div
                className={s.langswitchText}
                onClick={switchLanguage}
            >{T('footer_langswitch_text')}</div>
        </div>
    )
}

export default Footer