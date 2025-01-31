import useBasket from '../../helpers/useBasket';
import Page from '../../components/page/Page';
import FancySection from '../../components/generalUI/fancySection/FancySection';
import useTranslations from '../../translations/useTranslations';
import BasketStickyFooter from './components/basketStickyFooter/BasketStickyFooter';
import ProductRow from '../../components/productRow/ProductRow';
import PriceBox from '../../components/generalUI/priceBox/PriceBox';
import LoadingSection from '../../components/generalUI/loadingSection/LoadingSection';
import { useWarehouse, checkIfNonWarehouseProducts, getNameAndFormatWarehouse } from '../../queries/warehouse';
import s from './Basket.module.css';

export const Basket = () => {

    const { noEmptyList, update, getItemQuantity, isEmpty, getTotalCashback, getTotalPrice } = useBasket()
    const { data, isLoading, isError } = useWarehouse()
    const T = useTranslations()

    const areNonWarehouseProducts = checkIfNonWarehouseProducts(data, noEmptyList)

    return (
        <Page
            outsideChilds={<BasketStickyFooter/>}
        >
            <FancySection header={T('basket_section1_title')} content={T('basket_section1_text')}/>
            <LoadingSection isLoading={isLoading} isError={isError}>
                <div className={s.container}>
                    {!isEmpty() && areNonWarehouseProducts ? 
                                <div className={s.nonWarehouseDisclaimer}>⚠️ {T('non_warehouse_disclaimer')}</div>
                    : null}
                    <div className={s.basket}>
                        {noEmptyList.map((item, index) => {
                            const wh = getNameAndFormatWarehouse(data, item.name, item.format);
                            return (
                                <ProductRow
                                    key={index}
                                    productName={item.name}
                                    format={item.format}
                                    price={item.price}
                                    cashback={item.cashback}
                                    quantity={getItemQuantity(item.name, item.format)}
                                    onChange={(q: number)  => update({...item, quantity: q})}
                                    warehouse={wh}
                                />
                        )})}
                    </div>
                    {isEmpty() ? (
                        <div className={s.emptyDisclaimer}>{T('empty_basket_text')}</div>
                    ) : (
                        <>
                            <PriceBox 
                                totalPrice={getTotalPrice()} 
                                totalCashback={getTotalCashback()}
                            />
                        </>

                    )}
                </div>
            </LoadingSection>
        </Page>
    );
}

export default Basket