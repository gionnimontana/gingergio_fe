import ActionButton from "../../../components/generalUI/actionButton/ActionButton";
import useBasket from "../../../helpers/useBasket";
import s from './BuyBox.module.css';
import useTranslations from "../../../translations/useTranslations";
import CurrencyFormatter from "../../../components/generalUI/currencyFormatter/CurrencyFormatter";
import { BasketItem } from "../../../types/basket";

interface Props {
    totalPrice: number;
    totalCashback: number;
    items: BasketItem[];
    callback: () => void;
}

const PriceBox = ({ totalCashback, totalPrice, items, callback }: Props) => {
    const { add } = useBasket();

    const T = useTranslations();

    const addToBasket = () => {
        items.forEach(item => {
            add(item);
        });
        callback();
    }

    return (
        <>
            <div className={s.priceBox}>
                <div className={s.priceLabel}>{T('total')}</div>
                <div className={s.price}>
                    <CurrencyFormatter value={totalPrice}/>
                    <div className={s.totalCashback}><CurrencyFormatter value={totalCashback}/> {T('cashback')}*</div>
                </div>
            </div>
            <div className={s.actions}>
                <ActionButton 
                    onClick={addToBasket} 
                    label={`${T('add_to_basket')}`}
                    disabled={items.length === 0}
                />
            </div>
            <div className={s.cashbackDisclaimer}>* {T('cashback_disclaimer')}</div>
        </>
    );
}

export default PriceBox;
