import useTranslations from "../../../../translations/useTranslations";
import LoadingSection from "../../../../components/generalUI/loadingSection/LoadingSection";
import { useOrders } from "../../../../queries/orders";
import OrderBox from "../../../../components/orders/orderBox/OrderBox";

const UserOrders = () => {
    const { isLoading, isError, data } = useOrders();
    const T = useTranslations()

    return (
        <> 
            <LoadingSection isLoading={isLoading} isError={isError}>
                {data && data.length > 0 ? (
                    <OrderBox orders={data}/>
                ) : T('no_current_orders_message')}
            </LoadingSection>
        </>
    );
}

export default UserOrders;