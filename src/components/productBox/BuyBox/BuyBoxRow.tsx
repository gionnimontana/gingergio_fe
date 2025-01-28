import { useState } from "react";
import { NumberField } from "../../../components/generalUI/numberField/NumberField";
import useTranslations from "../../../translations/useTranslations";
import s from './BuyBox.module.css';
import CurrencyFormatter from "../../../components/generalUI/currencyFormatter/CurrencyFormatter";

interface Props {
    format: string;
    price: number;
    cashback: number;
    callback: (quantity: number, format: string, price: number, cashback: number) => void;
}

const BuyBoxRow = ({ callback, format, price, cashback }: Props) => {
    const [quantity, setQuantity] = useState<number>(0);

    const T = useTranslations();

    const onChange = (newQuantity: number) => {
        setQuantity(newQuantity);
        callback(newQuantity, format, price, cashback);
    }

    return (
        <>
            <div className={s.optionRow}>
                <div>
                    <div className={s.header}>{T('format')}</div>
                    <div>{format}</div>
                </div>
                <div>
                    <div className={s.header}>{T('price')}</div>
                    <CurrencyFormatter value={price}/>
                </div>
                <div>
                    <div className={s.header}>{T('cashback')}*</div>
                    <CurrencyFormatter value={cashback}/>
                </div>
                <NumberField value={quantity} onChange={onChange} min={0}/>
            </div>
            <div className={s.separator}></div>
        </>
    )
}

export default BuyBoxRow;