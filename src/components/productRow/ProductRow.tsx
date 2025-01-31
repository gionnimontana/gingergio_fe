import { NumberField } from "../../components/generalUI/numberField/NumberField";
import useTranslations from "../../translations/useTranslations";
import CurrencyFormatter from "../../components/generalUI/currencyFormatter/CurrencyFormatter";
import s from './ProductRow.module.css';

interface Props {
    format: string;
    price: number;
    cashback: number;
    quantity: number;
    productName?: string;
    warehouse: number;
    onChange: (newQuantity: number) => void;
}

const ProductRow = ({ quantity, productName, format, price, cashback, onChange, warehouse }: Props) => {
    const T = useTranslations();

    return (
        <>
            <div className={s.optionRow}>
                {productName ? <div>
                    <div className={s.header}>{T('name')}</div>
                    <div className={s.textSpace}>{productName}</div>
                </div> : null }
                <div className={s.rowBlock}>
                    <div>
                        <div className={s.header}>{T('format')}</div>
                        <div className={s.textSpace}>{format}</div>
                    </div>
                    <div>
                        <div className={s.header}>{T('price')}</div>
                        <CurrencyFormatter value={price}/>
                    </div>
                    <div>
                        <div className={s.header}>{T('cashback')}*</div>
                        <CurrencyFormatter value={cashback}/>
                    </div>
                </div>
                <div>
                    <div className={s.header}>{T('warehouse')}**</div>
                    <div>{warehouse}</div>
                </div>
                <NumberField value={quantity} onChange={onChange}/>
            </div>
            <div className={s.separator}></div>
        </>
    )
}

export default ProductRow;