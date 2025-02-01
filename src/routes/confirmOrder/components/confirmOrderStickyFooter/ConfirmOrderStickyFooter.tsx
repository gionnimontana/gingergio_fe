import { useNavigate } from "react-router-dom";
import { routes } from "../../../../constants/routes";
import useTranslations from "../../../../translations/useTranslations";
import useBasket from "../../../../helpers/useBasket";
import StickyFooter from "../../../../components/generalUI/stickyFooter/StickyFooter";
import ActionButton from "../../../../components/generalUI/actionButton/ActionButton";
import s from "./BasketStickyFooter.module.css";

const ConfirmOrderStickyFooter = () => {
    const { isEmpty } = useBasket();
    const T = useTranslations();
    const navigate = useNavigate()
    const goToBasket = () => {
        navigate(routes.Basket)
    }
    const goTo = () => {
        navigate(routes.Market)
    }

    return (
        <StickyFooter>
            <ActionButton label={T('basketStickyFooter_button1')} onClick={goToBasket} contrast={!isEmpty()}/>
            {!isEmpty() ? <ActionButton label="demo" onClick={goToBasket}/> : null}
        </StickyFooter>
    );
};

export default ConfirmOrderStickyFooter;