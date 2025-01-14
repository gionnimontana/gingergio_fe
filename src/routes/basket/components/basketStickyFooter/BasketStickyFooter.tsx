import { useNavigate } from "react-router-dom";
import { routes } from "../../../../constants/routes";
import useTranslations from "../../../../translations/useTranslations";
import useBasket from "../../../../helpers/useBasket";
import StickyFooter from "../../../../components/generalUI/stickyFooter/StickyFooter";
import ActionButton from "../../../../components/generalUI/actionButton/ActionButton";
import s from "./BasketStickyFooter.module.css";

const BasketStickyFooter = () => {
    const { basket } = useBasket();
    const T = useTranslations();
    const navigate = useNavigate()
    const goToBasket = () => {
        navigate(routes.Basket)
    }
    const goToMarket = () => {
        navigate(routes.Market)
    }

    const areItems = basket.length > 0

    return (
        <StickyFooter>
            <ActionButton label={T('basketStickyFooter_button1')} onClick={goToMarket} contrast={areItems}/>
            {areItems ? <ActionButton label={T('basketStickyFooter_button2')} onClick={goToBasket}/> : null}
        </StickyFooter>
    );
};

export default BasketStickyFooter;