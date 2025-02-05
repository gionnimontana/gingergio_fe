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
    const goToAuthPage = () => {
        navigate(routes.AuthPage)
    }
    const goToMarket = () => {
        navigate(routes.Market)
    }

    return (
        <StickyFooter>
            <ActionButton label={T('basketStickyFooter_button1')} onClick={goToMarket} contrast={true}/>
            <ActionButton label={T('confirm')} onClick={goToAuthPage} disabled={isEmpty()}/>
        </StickyFooter>
    );
};

export default BasketStickyFooter;