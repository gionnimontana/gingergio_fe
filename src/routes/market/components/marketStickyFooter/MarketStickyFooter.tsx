import { useNavigate } from "react-router-dom";
import { routes } from "../../../../constants/routes";
import useTranslations from "../../../../translations/useTranslations";
import useBasket from "../../../../helpers/useBasket";
import StickyFooter from "../../../../components/generalUI/stickyFooter/StickyFooter";
import ActionButton from "../../../../components/generalUI/actionButton/ActionButton";
import s from "./MarketStickyFooter.module.css";

const MarketStickyFooter = () => {
    const { isEmpty, getTotalItemNumber } = useBasket();
    const T = useTranslations();
    const navigate = useNavigate()
    const goToBasket = () => {
        navigate(routes.Basket)
    }

    if (isEmpty()) return null;

    const label = `${T('goToBasket')} (${getTotalItemNumber()})`;

    return (
        <StickyFooter>
            <ActionButton label={label} onClick={goToBasket}/>
        </StickyFooter>
    );
};

export default MarketStickyFooter;