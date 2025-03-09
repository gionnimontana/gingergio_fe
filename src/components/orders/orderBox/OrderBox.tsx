import { Order } from "../../../queries/orders";
import OrderRow from "../orderRow/OrderRow";
import s from './OrderBox.module.css';

interface Props {
    orders: Order[];
}

const orderBox = ({ orders }: Props) => {
    
    return (
        <div className={s.container}>
            {orders.map((order, index) => (
                <OrderRow order={order} key={index}/>
            ))}
        </div>
    );
}

export default orderBox;