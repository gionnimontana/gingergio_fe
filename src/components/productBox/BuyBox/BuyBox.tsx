import useTranslations from "../../../translations/useTranslations";
import BuyBoxRow from "./BuyBoxRow";
import PriceBox from "./PriceBox";
import { BasketItem } from "../../../types/basket";
import { useState } from "react";
import { useBottleType } from "../../../queries/bottle_type";
import Spinner from "../../../components/generalUI/spinner/Spinner";
import s from './BuyBox.module.css';

interface Props {
    productId: string;
    closeBox: () => void;
}

const BuyBox = ({ productId, closeBox }: Props) => {
    const [items, setItems] = useState<BasketItem[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [totalCashback, setTotalCashback] = useState<number>(0);

    const T = useTranslations();
    const { isError, isLoading, data } = useBottleType();

    const onRowChange = (quantity: number, format: string, price: number, cashback: number) => {
        const newItems = items.filter(item => item.format !== format);
        for (let i = 0; i < quantity; i++) {
            newItems.push({name: productId, format, price, cashback});
        }
        const newTotalPrice = newItems.reduce((acc, item) => acc + item.price, 0);
        const newTotalCashback = newItems.reduce((acc, item) => acc + item.cashback, 0);
        setItems(newItems);
        setTotalPrice(newTotalPrice);
        setTotalCashback(newTotalCashback);
    }

    const addToCartCB = () => {
        setItems([]);
        setTotalPrice(0);
        setTotalCashback(0);
        closeBox();
    }

    return (
        <div className={s.container}>
            {isLoading && <Spinner />}
            {isError && <div>Error on bottle type loading, I'm sorry :(</div>}
            {data?.map((bottleType) => (
                <BuyBoxRow
                    key={bottleType.id}
                    format={bottleType.name}
                    price={bottleType.price}
                    cashback={bottleType.return_price}
                    callback={onRowChange}
                />
            ))}
            <PriceBox
                totalPrice={totalPrice}
                totalCashback={totalCashback}
                items={items}
                callback={addToCartCB}
            />
        </div>
    );
}

export default BuyBox;
