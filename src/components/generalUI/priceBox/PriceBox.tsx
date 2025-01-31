import useTranslations from "../../../translations/useTranslations";
import CurrencyFormatter from "../../../components/generalUI/currencyFormatter/CurrencyFormatter";
import s from './PriceBox.module.css';

interface Props {
    totalPrice: number;
    totalCashback: number;
}

const PriceBox = ({ totalCashback, totalPrice }: Props) => {
    const T = useTranslations();

    return (
        <>
            <div className={s.priceBox}>
                <div className={s.priceLabel}>{T('total')}</div>
                <div className={s.price}>
                    <CurrencyFormatter value={totalPrice}/>
                    <div className={s.totalCashback}><CurrencyFormatter value={totalCashback}/> {T('cashback')}*</div>
                </div>
            </div>
            <div className={s.cashbackDisclaimer}>* {T('cashback_disclaimer')}</div>
            <div className={s.cashbackDisclaimer}>** {T('warehouse_disclaimer')}</div>
        </>
    );
}

export default PriceBox;
