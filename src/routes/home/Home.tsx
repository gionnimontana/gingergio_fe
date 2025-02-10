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
                <FancySection
                    img={{src: '/gingergio_face.webp', alt: 'Ginger Gio'}}
                    content={[T('home_section1a_text'), T('home_section1b_text'), T('home_section1c_text')]}
                    keyWords={['lievito madre di zenzero', 'ginger mother yeast']}
                />
                <FancySection 
                    img={{src: '/bottle_home.jpg', alt: 'bottles', right: true}}
                    header={T('home_section2_title')} 
                    content={T('home_section2_text')}
                    keyWords={['fiducia', 'trust']}
                />
                <FancySection 
                    header={T('home_section3_title')} 
                    content={[T('home_section3a_text'), T('home_section3b_text'), T('home_section3c_text'), T('home_section3d_text'), T('home_section4a_text')]}
                    keyWords={['Lieviti selvatici:', 'Wild yeasts:', 'Batteri lattici:', 'Lactic bacteria:', 'Batteri acetici:', 'Acetic bacteria:', 'simbiosi', 'symbiosis']}
                />
                <FancySection
                    header={T('home_section4_title')}
                    content={[T('home_section4b_text'), T('home_section4c_text'), T('home_section4d_text'), T('home_section4e_text'), T('home_section4f_text'), T('home_section4g_text'), T('home_section4h_text')]}
                    keyWords={['Supporto alla salute intestinale:', 'Rafforzamento del sistema immunitario:', 'Miglior assorbimento dei nutrienti:','Riduzione dell’infiammazione:', 'Effetto antiossidante:', 'Miglioramento del metabolismo:', 'Supporto alla salute mentale:', 'Support for intestinal health:', 'Strengthening the immune system:', 'Better nutrient absorption:', 'Reduction of inflammation:', 'Antioxidant effect:', 'Metabolism improvement:', 'Support for mental health:']}
                />
            </div>
            <StickyFooter>
                <ActionButton label={T('buybutton_label')} onClick={goToMarket}/>
            </StickyFooter>
            <Footer/>
        </>
    )
}