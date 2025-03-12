import useTranslations from "../../../translations/useTranslations";
import { Order } from "../../../queries/orders";
import s from './OrderRow.module.css';
import { c } from "vite/dist/node/moduleRunnerTransport.d-CXw_Ws6P";

interface Props {
    order: Order;
}

const OrderRow = ({ order }: Props) => {
    const { confirmed, type, basket, desired_delivery, updates, created } = order;
    const T = useTranslations();

    const orderDateRaw = new Date(created);
    const deliveryDateRaw = new Date(desired_delivery);
    const deliveryDate = `${deliveryDateRaw.getDate()}/${deliveryDateRaw.getMonth() + 1}/${deliveryDateRaw.getFullYear()}`;
    const orderDate = `${orderDateRaw.getDate()}/${orderDateRaw.getMonth() + 1}/${orderDateRaw.getFullYear()}`; 

    return (
        <>
            {updates ? (
                <div className={s.updates}>
                    <div className={s.header}>{T('updates')}</div>
                    <div className={s.updateSpace}>{updates}</div> 
                </div>
            ) : null}
            <div className={s.optionRow}>
                <div>
                    <div className={s.header}>{T('orderDate')}</div>
                    <div className={s.textSpace}>{orderDate}</div>
                </div>
                <div>
                    <div className={s.header}>{T('orderType')}</div>
                    <div className={s.textSpace}>{T(type)}</div> 
                </div>
                <div>
                    <div className={s.header}>{T('deliveryDate')}</div>
                    <div className={s.textSpace}>{deliveryDate}</div>
                </div>
                <div>
                    <div className={s.header}>{T('orderContent')}</div>
                    <div className={s.produceSpace}>
                        {basket && Object.keys(basket).map((name) => (
                            <div className={s.productRow}>
                                <div>{basket[name]}</div>
                                    -
                                <div>{name}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className={s.header}>{T('confirmed')}</div>
                    <div className={s.textSpace}>{confirmed ? '✅' : '❌'}</div> 
                </div>
            </div>
            <div className={s.separator}></div>
        </>
    );
}

export default OrderRow;
