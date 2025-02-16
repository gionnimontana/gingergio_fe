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
            <FancySection 
                content={T('market_section1_text')} 
                keyWords={['traceability', 'transparency', 'passione', 'tracciabilità', 'trasparenza', 'passion']}
            />
            <div className={s.productsContainer}>
                <ProductBox 
                    name='House Pride' 
                    description={[T('house_pride_desc1'), T('house_pride_desc2'), T('house_pride_ingrediens'), T('house_pride_nutritional'), T('fresh_drinks_conservation')]}
                    productId='house-pride'
                />
                <ProductBox 
                    name='Zen Cola' 
                    description={[T('zen_cola_desc1'), T('zen_cola_desc2'), T('zen_cola_ingrediens'), T('zen_cola_nutritional'), T('fresh_drinks_conservation')]}
                    productId='zen-cola'
                />
                <ProductBox 
                    name='Hojicha' 
                    description={[T('hojicha_desc1'), T('hojicha_desc2'), T('hojicha_ingrediens'), T('hojicha_nutritional'), T('fresh_drinks_conservation')]}
                    productId='hojicha'
                />
            </div>
        </Page>
    );
}