import { useWarehouse } from "../../../queries/warehouse";
import s from './BuyBox.module.css';
import useTranslations from "../../../translations/useTranslations";
import BuyBoxRow from "./BuyBoxRow";
import PriceBox from "./PriceBox";
import { BasketItem } from "../../../types/basket";
import { useEffect, useState } from "react";

interface Props {
    productId: string;
    closeBox: () => void;
}

const BuyBox = ({ productId, closeBox }: Props) => {
    const [items, setItems] = useState<BasketItem[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [totalCashback, setTotalCashback] = useState<number>(0);

    const T = useTranslations();

    const onRowChange = (quantity: number, format: string, price: number, cashback: number) => {
        const newItems = items.filter(item => item.format !== format);
        for (let i = 0; i < quantity; i++) {
            newItems.push({name: productId, format, price, cashback});
        }
        setItems(newItems);
        const newTotalPrice = newItems.reduce((acc, item) => acc + item.price, 0);
        const newTotalCashback = newItems.reduce((acc, item) => acc + item.cashback, 0);
        setTotalPrice(newTotalPrice);
        setTotalCashback(newTotalCashback);
    }

    const addToCart = () => {
        setItems([]);
        setTotalPrice(0);
        setTotalCashback(0);
        closeBox();
    }

    return (
        <div className={s.container}>
            <BuyBoxRow format="Vetro 220ml" price={3.00} cashback={1.25} callback={onRowChange}/>
            <BuyBoxRow format="Vetro 250ml" price={3.50} cashback={1.75} callback={onRowChange}/>
            <PriceBox
                totalPrice={totalPrice}
                totalCashback={totalCashback}
                items={items}
                callback={addToCart}
            />
        </div>
    );
}

export default BuyBox;
