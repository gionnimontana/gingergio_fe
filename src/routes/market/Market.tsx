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
            <FancySection content={T('market_section1_text')}/>

            <div className={s.productsContainer}>
                <ProductBox 
                    name='House Pride' 
                    description={[T('house_pride_desc1'), T('house_pride_desc2')]}
                    imageId='housepride'
                />
                <ProductBox 
                    name='Zen Cola' 
                    description={[T('zen_cola_desc1'), T('zen_cola_desc2')]}
                    imageId='zencola'
                />
                <ProductBox 
                    name='Hojicha' 
                    description={[T('hojicha_desc1'), T('hojicha_desc2')]}
                    imageId='zencola'
                />
            </div>
            
        </Page>
    );
}