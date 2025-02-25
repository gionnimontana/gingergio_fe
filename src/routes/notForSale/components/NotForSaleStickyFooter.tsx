import { useNavigate } from "react-router-dom";
import { routes } from "../../../constants/routes";
import StickyFooter from "../../../components/generalUI/stickyFooter/StickyFooter";
import ActionButton from "../../../components/generalUI/actionButton/ActionButton";

const NotForSaleStickyFooter = () => {
    const navigate = useNavigate()

    const revolutCB = () => {
        window.open('https://revolut.me/giovaninoo', '_blank')
    }
    const satispayCB = () => {
        window.open('https://web.satispay.com/app/match/link/user/S6Y-CON--8F7D06AA-9C1A-45C3-8469-00AAC64233DF?amount=150&currency=EUR', '_blank')
    }
    const paypalCB = () => {
        window.open('https://www.paypal.me/gionnimontana', '_blank')
    }

    return (
        <StickyFooter>
            <ActionButton label={'Revolut'} onClick={revolutCB} short/>
            <ActionButton label={'Satispay'} onClick={satispayCB} short/>
            <ActionButton label={'PayPal'} onClick={paypalCB} short/>
        </StickyFooter>
    );
};

export default NotForSaleStickyFooter;