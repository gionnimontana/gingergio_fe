import { useNavigate } from "react-router-dom";
import { routes } from "../../../../constants/routes";
import useTranslations from "../../../../translations/useTranslations";
import StickyFooter from "../../../../components/generalUI/stickyFooter/StickyFooter";
import ActionButton from "../../../../components/generalUI/actionButton/ActionButton";

interface Props {
    canConfirm: boolean;
    onConfirm: () => Promise<boolean>;
    isLoading?: boolean;
}

const PaymentAndDelivery = ({ canConfirm, onConfirm, isLoading }: Props) => {
    const T = useTranslations();
    const navigate = useNavigate()
    const goToBasket = () => {
        navigate(routes.Basket)
    }
    const goToConfirmOrder = async () => {
        const success = await onConfirm()
        if (success) navigate(routes.ConfirmOrder)
    }

    return (
        <StickyFooter>
            <ActionButton label={T('goToBasket')} onClick={goToBasket} contrast={true}/>
            <ActionButton label={T('confirm')} onClick={goToConfirmOrder} disabled={!canConfirm} isLoading={isLoading}/>
        </StickyFooter>
    );
};

export default PaymentAndDelivery;