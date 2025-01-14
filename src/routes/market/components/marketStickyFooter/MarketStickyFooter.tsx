import { useNavigate } from "react-router-dom";
import { routes } from "../../../../constants/routes";
import useTranslations from "../../../../translations/useTranslations";
import useBasket from "../../../../helpers/useBasket";
import StickyFooter from "../../../../components/generalUI/stickyFooter/StickyFooter";
import ActionButton from "../../../../components/generalUI/actionButton/ActionButton";
import s from "./MarketStickyFooter.module.css";

const MarketStickyFooter = () => {
    const { basket } = useBasket();
    const T = useTranslations();
    const navigate = useNavigate()
    const goToBasket = () => {
        navigate(routes.Basket)
    }

    if (basket.length === 0) return null;

    const label = `${T('marketStickyFooter_label')} (${basket.length})`;

    return (
        <StickyFooter>
            <ActionButton label={label} onClick={goToBasket}/>
        </StickyFooter>
    );
};

export default MarketStickyFooter;