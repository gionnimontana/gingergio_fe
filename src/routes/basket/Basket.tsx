import useBasket from '../../helpers/useBasket';
import Page from '../../components/page/Page';
import FancySection from '../../components/generalUI/fancySection/FancySection';
import useTranslations from '../../translations/useTranslations';
import BasketStickyFooter from './components/basketStickyFooter/BasketStickyFooter';
import ProductRow from '../../components/productRow/ProductRow';
import PriceBox from '../../components/generalUI/priceBox/PriceBox';
import s from './Basket.module.css';

export const Basket = () => {

    const { nonEmptyList, update, getItemQuantity, isEmpty, getTotalCashback, getTotalPrice } = useBasket()
    const T = useTranslations()

    return (
        <Page
            outsideChilds={<BasketStickyFooter/>}
        >
            <FancySection header={T('basket_section1_title')} content={T('basket_section1_text')}/>
            <div className={s.container}>
                <div className={s.basket}>
                    {nonEmptyList.map((item, index) => (
                        <ProductRow
                            key={index}
                            productName={item.name}
                            format={item.format}
                            price={item.price}
                            cashback={item.cashback}
                            quantity={getItemQuantity(item.name, item.format)}
                            onChange={(q: number)  => update({...item, quantity: q})}
                        />
                    ))}
                </div>
                {isEmpty() ? (
                    <div className={s.emptyDisclaimer}>{T('empty_basket_text')}</div>
                ) : (
                    <PriceBox 
                        totalPrice={getTotalPrice()} 
                        totalCashback={getTotalCashback()}
                    />
                )}
            </div>
        </Page>
    );
}

export default Basket