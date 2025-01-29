import useTranslations from "../../../translations/useTranslations";
import PriceBox from "../../../components/generalUI/priceBox/PriceBox";
import { BottleType, useBottleType } from "../../../queries/bottle_type";
import Spinner from "../../../components/generalUI/spinner/Spinner";
import ProductRow from "../../../components/productRow/ProductRow";
import useBasket from "../../../helpers/useBasket";
import s from './BuyBox.module.css';

interface Props {
    productId: string;
}

const BuyBox = ({ productId }: Props) => {
    const T = useTranslations();
    const { isError, isLoading, data } = useBottleType();
    const { getItemQuantity, getPriceByName, getCashbackByName, update, fromBottleTypeToBasketItem } = useBasket();

    const onChange = (name: string, bottleType: BottleType) => (newQuantity: number) => {
        const item = fromBottleTypeToBasketItem(bottleType, name, newQuantity);
        update(item);
    };

    return (
        <div className={s.container}>
            {isLoading && <Spinner />}
            {isError && <div>Error on bottle type loading, I'm sorry :(</div>}
            {data?.map((bottleType) => (
                <ProductRow
                    key={bottleType.id}
                    format={bottleType.name}
                    price={bottleType.price}
                    cashback={bottleType.return_price}
                    quantity={getItemQuantity(productId, bottleType.name)}
                    onChange={onChange(productId, bottleType)}
                />
            ))}
            <PriceBox
                totalPrice={getPriceByName(productId)}
                totalCashback={getCashbackByName(productId)}
            />
        </div>
    );
}

export default BuyBox;
