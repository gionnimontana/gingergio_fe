import useTranslations from '../../translations/useTranslations';
import useBasket from '../../helpers/useBasket';
import Page from '../../components/page/Page';
import FancySection from '../../components/generalUI/fancySection/FancySection';
import MarketStickyFooter from './components/marketStickyFooter/MarketStickyFooter';
import s from './Market.module.css';
import ProductBox from '../../components/productBox/ProductBox';

export const Market = () => {

    const T = useTranslations()

    return (
        <Page
            outsideChilds={<MarketStickyFooter/>}
        >
            <FancySection header={T('market_section1_title')} content={T('market_section1_text')}/>

            <div className={s.productsContainer}>
                <ProductBox 
                    name='House Pride' 
                    description='Bevanda analcolica fermentata a base di zenzero, limone e spezie. Gusto intenso e speziato, con note di limone e zenzero.' 
                    imageId='housepride'
                />
                <ProductBox 
                    name='Zen Cola' 
                    description='Bevanda analcolica fermentata a base di the yunnan pu-erh e spezie. Gusto intenso e speziato, con note di the e spezie.' 
                    imageId='zencola'
                    imageRight={true}
                />
            </div>
            
        </Page>
    );
}