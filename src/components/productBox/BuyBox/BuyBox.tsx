import useTranslations from "../../../translations/useTranslations";
import PriceBox from "../../../components/generalUI/priceBox/PriceBox";
import { BottleType, useBottleType } from "../../../queries/bottle_type";
import ProductRow from "../../../components/productRow/ProductRow";
import useBasket from "../../../helpers/useBasket";
import { useWarehouse, getNameAndFormatWarehouse } from "../../../queries/warehouse";
import s from './BuyBox.module.css';
import LoadingSection from "../../../components/generalUI/loadingSection/LoadingSection";

interface Props {
    productId: string;
}

const BuyBox = ({ productId }: Props) => {
    const T = useTranslations();
    const bottleType = useBottleType();
    const warehouse = useWarehouse();
    const { getItemQuantity, getPriceByName, getCashbackByName, update, fromBottleTypeToBasketItem } = useBasket();

    const onChange = (name: string, bottleType: BottleType) => (newQuantity: number) => {
        const item = fromBottleTypeToBasketItem(bottleType, name, newQuantity);
        update(item);
    };

    const isLoading = bottleType.isLoading || warehouse.isLoading;
    const isError = bottleType.isError || warehouse.isError;

    return (
        <div className={s.container}>
            <LoadingSection isLoading={isLoading} isError={isError}>
                {bottleType.data?.map((bottleType) => {
                    const wh = getNameAndFormatWarehouse(warehouse.data, productId, bottleType.name);
                    return (
                        <ProductRow
                            key={bottleType.id}
                            format={bottleType.name}
                            price={bottleType.price}
                            cashback={bottleType.return_price}
                            quantity={getItemQuantity(productId, bottleType.name)}
                            onChange={onChange(productId, bottleType)}
                            warehouse={wh}
                        />
                )})}
                <PriceBox
                    totalPrice={getPriceByName(productId)}
                    totalCashback={getCashbackByName(productId)}
                />
            </LoadingSection>
        </div>
    );
}

export default BuyBox;
