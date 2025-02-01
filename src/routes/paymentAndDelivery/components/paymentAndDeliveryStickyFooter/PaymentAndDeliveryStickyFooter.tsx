import { useNavigate } from "react-router-dom";
import { routes } from "../../../../constants/routes";
import useTranslations from "../../../../translations/useTranslations";
import StickyFooter from "../../../../components/generalUI/stickyFooter/StickyFooter";
import ActionButton from "../../../../components/generalUI/actionButton/ActionButton";
import s from "./BasketStickyFooter.module.css";

interface Props {
    canConfirm: boolean;
}

const PaymentAndDelivery = ({ canConfirm }: Props) => {
    const T = useTranslations();
    const navigate = useNavigate()
    const goToBasket = () => {
        navigate(routes.Basket)
    }
    const goToConfirmOrder = () => {
        navigate(routes.ConfirmOrder)
    }

    return (
        <StickyFooter>
            <ActionButton label={T('basketStickyFooter_button1')} onClick={goToBasket} contrast={true}/>
            <ActionButton label={T('confirm')} onClick={goToConfirmOrder} disabled={canConfirm}/>
        </StickyFooter>
    );
};

export default PaymentAndDelivery;