import { useNavigate } from "react-router-dom";
import { routes } from "../../../../constants/routes";
import useTranslations from "../../../../translations/useTranslations";
import useBasket from "../../../../helpers/useBasket";
import StickyFooter from "../../../../components/generalUI/stickyFooter/StickyFooter";
import ActionButton from "../../../../components/generalUI/actionButton/ActionButton";
import s from "./BasketStickyFooter.module.css";

const BasketStickyFooter = () => {
    const { isEmpty } = useBasket();
    const T = useTranslations();
    const navigate = useNavigate()
    const goToBasket = () => {
        navigate(routes.Basket)
    }
    const goToMarket = () => {
        navigate(routes.Market)
    }

    return (
        <StickyFooter>
            <ActionButton label={T('basketStickyFooter_button1')} onClick={goToMarket} contrast={!isEmpty()}/>
            {!isEmpty() ? <ActionButton label={T('basketStickyFooter_button2')} onClick={goToBasket}/> : null}
        </StickyFooter>
    );
};

export default BasketStickyFooter;